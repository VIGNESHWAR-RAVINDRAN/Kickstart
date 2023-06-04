import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance=new web3.eth.Contract(
JSON.parse(CampaignFactory.interface),
'0x9DEdD0D4872D341977c361dAb486E94b7D506fD8'
);

export default instance;