import crypto from "crypto";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const algorithm = "aes-256-cbc";
const key = Buffer.from(process.env.NEXT_PUBLIC_AES_KEY as string, "utf-8");
const iv = Buffer.from(process.env.NEXT_PUBLIC_AES_IV as string, "utf-8");

export class Crypt {
  static encrypt(value: string): string {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(value, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  }

  static decrypt(value: string): string {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(value, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }
}
