import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const CHANGE_ORG_URL =
  'https://www.change.org/p/actransparencia-keikofujimori-pedrocastillote-canaln-que-los-candidatos-pedro-castillo-y-keiko-fujimori-firmen-la-siguiente-proclama-ciudadana';

export const getSignatureCount = async () => {
  const response = await fetch(CHANGE_ORG_URL);
  const text = await response.text();
  const dom = new JSDOM(text, { runScripts: 'dangerously' });
  const script = dom.window.changeTargetingData;
  return script.petition.signatureCount.total;
};

export default async function handler(req, res) {
  const result = await getSignatureCount();
  res.status(200).json(result);
}
