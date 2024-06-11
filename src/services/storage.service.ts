export class StorageService {
  private dbName: string;
  private storeName: string;

  constructor(dbName = 'bbm-ace', storeName = 'ace-store') {
    this.dbName = dbName;
    this.storeName = storeName;

    if (typeof window !== 'undefined') {
      this.initDB();
    }
  }

  private initDB(): void {
    const request = indexedDB.open(this.dbName, 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(this.storeName)) {
        db.createObjectStore(this.storeName, { keyPath: 'key' });
      }
    };

    request.onerror = () => {
      console.error("IndexedDB initialization error");
    };
  }

  private getDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject("IndexedDB connection error");
      };
    });
  }

  private async withStore(type: IDBTransactionMode, callback: (store: IDBObjectStore) => void): Promise<void> {
    const db = await this.getDB();
    const transaction = db.transaction(this.storeName, type);
    const store = transaction.objectStore(this.storeName);
    callback(store);

    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject("IndexedDB transaction error");
    });
  }

  async setItem(key: string, value: any): Promise<void> {
    return this.withStore('readwrite', (store) => {
      store.put({ key, value });
    });
  }

  async getItem(key: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      await this.withStore('readonly', (store) => {
        const request = store.get(key);

        request.onsuccess = () => {
          resolve(request.result ? request.result.value : null);
        };

        request.onerror = () => {
          reject("IndexedDB get item error");
        };
      });
    });
  }

  async clearItem(key: string): Promise<void> {
    return this.withStore('readwrite', (store) => {
      store.delete(key);
    });
  }

  // Additional methods for sessionStorage-like functionality
  async setSessionItem(key: string, value: any): Promise<void> {
    // Implementation can be similar to setItem, targeting a different store if needed
    return this.setItem(key, value);
  }

  async getSessionItem(key: string): Promise<any> {
    // Implementation can be similar to getItem, targeting a different store if needed
    return this.getItem(key);
  }

  async clearSessionItem(key: string): Promise<void> {
    // Implementation can be similar to clearItem, targeting a different store if needed
    return this.clearItem(key);
  }
}
