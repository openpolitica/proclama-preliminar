import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const CHANGE_ORG_URL =
  'https://www.change.org/p/actransparencia-keikofujimori-pedrocastillote-canaln-que-los-candidatos-pedro-castillo-y-keiko-fujimori-firmen-la-siguiente-proclama-ciudadana';

const getSignatureCount = async () => {
  const response = await fetch(CHANGE_ORG_URL);
  const text = await response.text();
  const dom = new JSDOM(text, { runScripts: 'dangerously' });
  const script = dom.window.changeTargetingData;
  // ChangeTargetingData model (use as a reference to extract other data)
  // {
  //   reactFe: true,
  //   appState: { utmParams: {}, countryCode: 'PE', locale: 'es-419' },
  //   viewer: { user: {} },
  //   petition: {
  //     id: '28767136',
  //     user: { id: '1150815096', displayName: 'Ivan Lanegra', photo: null },
  //     organization: {
  //       id: '3174749',
  //       name: 'Asociación Civil Transparencia',
  //       photo: [Object]
  //     },
  //     createdAt: '2021-05-07T15:14:12Z',
  //     signatureCount: {
  //       total: 24845,
  //       __typename: 'SignatureCount',
  //       displayed: 24845,
  //       goal: 25000
  //     },
  //     weeklySignatureCount: 5261,
  //     tags: [ [Object] ]
  //   },
  //   recruiter: {}
  // }
  return script.petition.signatureCount.total;
};

export default async function handler(req, res) {
  const result = await getSignatureCount();
  res.status(200).json(result);
}
