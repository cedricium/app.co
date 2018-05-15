import React from 'react';
import { Hero } from '@containers/hero';
import { Header } from '@containers/header';
import { Page } from '@containers/page';
import { Featured } from '@containers/featured';
import { AppList } from '@containers/app-list';
// import SubmitDappCard from '@containers/cards/submit-dapp-card';
import NewsletterCTA from '@containers/newsletter-cta';

const featuredAppIDs = [
  55,
  112,
  52,
  73,
  54,
  50
  // 48,
  // 57,
  // 53
];

export default ({ data }) => (
  <Page>
    <Header data={data} />
    <Hero />
    <Page.Section wrap={1}>
      <Page.Section.Content>
        <Featured apps={data.apps} featured={featuredAppIDs}/>
      </Page.Section.Content>
    </Page.Section>

    <Page.Section wrap={1}>
      <Page.Section.Content>
        <AppList apps={data.apps} show={25} />
      </Page.Section.Content>
      {/*      <Page.Sidebar>
        <SubmitDappCard />
      </Page.Sidebar> */}
    </Page.Section>

    <Page.Section wrap={1}>
      <NewsletterCTA apiServer={data.apiServer} />
    </Page.Section>
  </Page>
);
