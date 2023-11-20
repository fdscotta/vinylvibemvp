const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: "User",
    phone: "+7 362 681 2103",
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const vinyls = [{
  title: "Inequality for All",
  album_status: "used",
  media_condition: 'f',
  packaging_condition: 'g+',
  is_auction: "false",
  accept_offers: "false",
  listing_price: 892140,
  photo: "http://dummyimage.com/144x100.png/5fa2dd/ffffff",
  description: "Poisn by centr-acting/adren-neurn-block agnt, undet, init",
  adv_store_location: "7001 Towne Court",
  adv_cost: 718046,
  adv_sku: "FR29 1922 1286 063T OL8E AY21 512",
  status: 'publish',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-11-23'
}, {
  title: "Weight of Water, The",
  album_status: "used",
  media_condition: 'vg',
  packaging_condition: 'g+',
  is_auction: "true",
  accept_offers: "true",
  listing_price: 245802,
  photo: "http://dummyimage.com/153x100.png/ff4444/ffffff",
  description: "Injury of oculomotor nerve, right side, subsequent encounter",
  adv_store_location: "6 Reindahl Parkway",
  adv_cost: 784906,
  adv_sku: "HR98 0096 8819 3920 2351 5",
  status: 'draft',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-11-12'
}, {
  title: "Flowers of Shanghai (Hai shang hua)",
  album_status: "new",
  media_condition: 'vg',
  packaging_condition: 'vg+',
  is_auction: "false",
  accept_offers: "false",
  listing_price: 712553,
  photo: "http://dummyimage.com/144x100.png/5fa2dd/ffffff",
  description: "Disp fx of post wall of left acetab, subs for fx w nonunion",
  adv_store_location: "4 Maple Wood Avenue",
  adv_cost: 257856,
  adv_sku: "LV67 HWVO EIE5 BCVG DQJM N",
  status: 'draft',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-11-02'
}, {
  title: "Mad Love (Sappho)",
  album_status: "used",
  media_condition: 'm',
  packaging_condition: 'vg+',
  is_auction: "false",
  accept_offers: "false",
  listing_price: 913631,
  photo: "http://dummyimage.com/167x100.png/5fa2dd/ffffff",
  description: "Lacerat flexor musc/fasc/tend l idx fngr at forarm lv, subs",
  adv_store_location: "773 Aberg Way",
  adv_cost: 570799,
  adv_sku: "AZ48 MCME 128S EQII ERYY WOOY XPKJ",
  status: 'publish',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-01-23'
}, {
  title: "Crimewave",
  album_status: "new",
  media_condition: 'vg',
  packaging_condition: 'vg',
  is_auction: "true",
  accept_offers: "false",
  listing_price: 288891,
  photo: "http://dummyimage.com/193x100.png/cc0000/ffffff",
  description: "Puncture wound with foreign body of lower leg",
  adv_store_location: "26034 Lotheville Lane",
  adv_cost: 461714,
  adv_sku: "MC95 4887 7411 75EQ VGET KXUQ E93",
  status: 'draft',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-06-11'
}, {
  title: "Time of Eve (Eve no jikan)",
  album_status: "used",
  media_condition: 'm',
  packaging_condition: 'nm',
  is_auction: "true",
  accept_offers: "true",
  listing_price: 781573,
  photo: "http://dummyimage.com/190x100.png/ff4444/ffffff",
  description: "Unspecified superficial injury of left foot, subs encntr",
  adv_store_location: "857 Randy Street",
  adv_cost: 148858,
  adv_sku: "DO75 GTJZ 4133 7750 1434 1608 2154",
  status: 'publish',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-09-10'
}, {
  title: "Cold Mountain",
  album_status: "used",
  media_condition: 'm',
  packaging_condition: 'g',
  is_auction: "false",
  accept_offers: "true",
  listing_price: 313499,
  photo: "http://dummyimage.com/192x100.png/5fa2dd/ffffff",
  description: "Exposure to sunlight",
  adv_store_location: "84 Ruskin Road",
  adv_cost: 66689,
  adv_sku: "AD56 4443 3347 FDLY LLNX BZDY",
  status: 'draft',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-09-26'
}, {
  title: "Palmetto",
  album_status: "new",
  media_condition: 'vg',
  packaging_condition: 'g',
  is_auction: "false",
  accept_offers: "false",
  listing_price: 352188,
  photo: "http://dummyimage.com/149x100.png/5fa2dd/ffffff",
  description: "Unspecified dislocation of right foot",
  adv_store_location: "48 Fairview Pass",
  adv_cost: 414633,
  adv_sku: "MR45 6105 1523 1064 8685 1028 586",
  status: 'draft',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-07-23'
}, {
  title: "Casino Royale",
  album_status: "new",
  media_condition: 'g',
  packaging_condition: 'nm',
  is_auction: "true",
  accept_offers: "false",
  listing_price: 107311,
  photo: "http://dummyimage.com/117x100.png/cc0000/ffffff",
  description: "Occup of pk-up/van injured in collision w unsp mv in traf",
  adv_store_location: "609 Esch Street",
  adv_cost: 832288,
  adv_sku: "GB32 CSVR 6912 8362 6214 71",
  status: 'publish',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-10-01'
}, {
  title: "Hands of Orlac, The (Orlacs Hände)",
  album_status: "new",
  media_condition: 'vg',
  packaging_condition: 'f',
  is_auction: "false",
  accept_offers: "false",
  listing_price: 970900,
  photo: "http://dummyimage.com/237x100.png/cc0000/ffffff",
  description: "Type 2 diab with mod nonp rtnop with macular edema, r eye",
  adv_store_location: "07312 Dryden Way",
  adv_cost: 169399,
  adv_sku: "FR26 2695 8673 62KQ N8WP JO7Q V16",
  status: 'publish',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-10-29'
}];

module.exports = {
  users,
  vinyls
};