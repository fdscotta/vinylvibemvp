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
  media_condition: 'f',
  packaging_condition: 'g+',
  price: 892140,
  photo: "http://dummyimage.com/144x100.png/5fa2dd/ffffff",
  description: "Poisn by centr-acting/adren-neurn-block agnt, undet, init",
  address: "7001 Towne Court",
  sku: "FR29 1922 1286 063T OL8E AY21 512",
  status: 'publish',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-11-23',
  discogs_data_id: 1
}, {
  title: "Weight of Water, The",
  media_condition: 'vg',
  packaging_condition: 'g+',
  price: 245802,
  photo: "http://dummyimage.com/153x100.png/ff4444/ffffff",
  description: "Injury of oculomotor nerve, right side, subsequent encounter",
  address: "6 Reindahl Parkway",
  sku: "HR98 0096 8819 3920 2351 5",
  status: 'draft',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-11-12',
  discogs_data_id: 1
}, {
  title: "Flowers of Shanghai (Hai shang hua)",
  media_condition: 'vg',
  packaging_condition: 'vg+',
  price: 712553,
  photo: "http://dummyimage.com/144x100.png/5fa2dd/ffffff",
  description: "Disp fx of post wall of left acetab, subs for fx w nonunion",
  address: "4 Maple Wood Avenue",
  sku: "LV67 HWVO EIE5 BCVG DQJM N",
  status: 'draft',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-11-02',
  discogs_data_id: 1
}, {
  title: "Mad Love (Sappho)",
  media_condition: 'm',
  packaging_condition: 'vg+',
  price: 913631,
  photo: "http://dummyimage.com/167x100.png/5fa2dd/ffffff",
  description: "Lacerat flexor musc/fasc/tend l idx fngr at forarm lv, subs",
  address: "773 Aberg Way",
  sku: "AZ48 MCME 128S EQII ERYY WOOY XPKJ",
  status: 'publish',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-01-23',
  discogs_data_id: 1
}, {
  title: "Crimewave",
  media_condition: 'vg',
  packaging_condition: 'vg',
  price: 288891,
  photo: "http://dummyimage.com/193x100.png/cc0000/ffffff",
  description: "Puncture wound with foreign body of lower leg",
  address: "26034 Lotheville Lane",
  sku: "MC95 4887 7411 75EQ VGET KXUQ E93",
  status: 'draft',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-06-11',
  discogs_data_id: 1
}, {
  title: "Time of Eve (Eve no jikan)",
  media_condition: 'm',
  packaging_condition: 'nm',
  price: 781573,
  photo: "http://dummyimage.com/190x100.png/ff4444/ffffff",
  description: "Unspecified superficial injury of left foot, subs encntr",
  address: "857 Randy Street",
  sku: "DO75 GTJZ 4133 7750 1434 1608 2154",
  status: 'publish',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-09-10',
  discogs_data_id: 1
}, {
  title: "Cold Mountain",
  media_condition: 'm',
  packaging_condition: 'g',
  price: 313499,
  photo: "http://dummyimage.com/192x100.png/5fa2dd/ffffff",
  description: "Exposure to sunlight",
  address: "84 Ruskin Road",
  sku: "AD56 4443 3347 FDLY LLNX BZDY",
  status: 'draft',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-09-26',
  discogs_data_id: 1
}, {
  title: "Palmetto",
  media_condition: 'vg',
  packaging_condition: 'g',
  price: 352188,
  photo: "http://dummyimage.com/149x100.png/5fa2dd/ffffff",
  description: "Unspecified dislocation of right foot",
  address: "48 Fairview Pass",
  sku: "MR45 6105 1523 1064 8685 1028 586",
  status: 'draft',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-07-23',
  discogs_data_id: 1
}, {
  title: "Casino Royale",
  media_condition: 'g',
  packaging_condition: 'nm',
  price: 107311,
  photo: "http://dummyimage.com/117x100.png/cc0000/ffffff",
  description: "Occup of pk-up/van injured in collision w unsp mv in traf",
  address: "609 Esch Street",
  sku: "GB32 CSVR 6912 8362 6214 71",
  status: 'publish',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-10-01',
  discogs_data_id: 1
}, {
  title: "Hands of Orlac, The (Orlacs Hände)",
  media_condition: 'vg',
  packaging_condition: 'f',
  price: 970900,
  photo: "http://dummyimage.com/237x100.png/cc0000/ffffff",
  description: "Type 2 diab with mod nonp rtnop with macular edema, r eye",
  address: "07312 Dryden Way",
  sku: "FR26 2695 8673 62KQ N8WP JO7Q V16",
  status: 'publish',
  user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
  publish_date: '2023-10-29',
  discogs_data_id: 1
}];

module.exports = {
  users,
  vinyls
};