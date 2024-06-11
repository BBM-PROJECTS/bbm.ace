import React, { Fragment } from 'react';

// NAVIGATION
import { Toolbar, Footer } from '@/components/navigation';
import { pointList } from '@/constants';
import { ListCard } from '@/components/core';

const HelpCenter = () => {
  return (
    <Fragment>
      <Toolbar />

      <section className="flex flex-col items-center w-full relative">
        <div className="container flex flex-col gap-y-16 items-center text-bronze-content">
          <div className="flex flex-col items-center gap-y-6">
            <h4 className="text-5xl">Begin your journey to success</h4>

            <p className="text-center text-xl">
              Embark on your path to prosperity. Select your account type and
              size to kickstart your journey towards financial success. Let's
              make your dreams a reality
            </p>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {pointList.map(({ heading, subheading, items, theme }, index) => (
              <ListCard
                key={index}
                items={items}
                theme={theme}
                heading={heading}
                subheading={subheading}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </Fragment>
  );
}

export default HelpCenter;