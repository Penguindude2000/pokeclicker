/*
To update this type when adding new items:

Open the game, and run the following code in the browser console

copy(`type ItemNameType
    = ${[...new Set(Object.values(ItemList).map(i => i.name))].map(i => `'${i.replace(/'/g, "\\'")}'`).join('\n    | ')};`);

Replace the everything in this file (except for this comment) with what was copied
*/

type ItemNameType
    = 'xAttack'
    | 'xClick'
    | 'Lucky_egg'
    | 'Token_collector'
    | 'Item_magnet'
    | 'Lucky_incense'
    | 'ChopleBerry'
    | 'KebiaBerry'
    | 'ShucaBerry'
    | 'ChartiBerry'
    | 'Fire_egg'
    | 'Water_egg'
    | 'Grass_egg'
    | 'Fighting_egg'
    | 'Electric_egg'
    | 'Dragon_egg'
    | 'Pokemon_egg'
    | 'Mystery_egg'
    | 'SmallRestore'
    | 'MediumRestore'
    | 'LargeRestore'
    | 'Leaf_stone'
    | 'Fire_stone'
    | 'Water_stone'
    | 'Thunder_stone'
    | 'Moon_stone'
    | 'Trade_stone'
    | 'Sun_stone'
    | 'Soothe_bell'
    | 'Metal_coat'
    | 'Kings_rock'
    | 'Upgrade'
    | 'Dragon_scale'
    | 'Prism_scale'
    | 'Deepsea_tooth'
    | 'Deepsea_scale'
    | 'Shiny_stone'
    | 'Dusk_stone'
    | 'Dawn_stone'
    | 'Razor_claw'
    | 'Razor_fang'
    | 'Electirizer'
    | 'Magmarizer'
    | 'Protector'
    | 'Dubious_disc'
    | 'Reaper_cloth'
    | 'Black_DNA'
    | 'White_DNA'
    | 'Sachet'
    | 'Whipped_dream'
    | 'Ice_stone'
    | 'FarmHandBailey'
    | 'FarmHandKerry'
    | 'FarmHandRiley'
    | 'FarmHandJamie'
    | 'Boost_Mulch'
    | 'Rich_Mulch'
    | 'Surprise_Mulch'
    | 'Amaze_Mulch'
    | 'PokeBlock_Black'
    | 'PokeBlock_Red'
    | 'PokeBlock_Gold'
    | 'PokeBlock_Purple'
    | 'PokeBlock_Gray'
    | 'PokeBlock_White'
    | 'Pokeball'
    | 'Greatball'
    | 'Ultraball'
    | 'Masterball'
    | 'Fastball'
    | 'Quickball'
    | 'Timerball'
    | 'Duskball'
    | 'Luxuryball'
    | 'Eevee'
    | 'Porygon'
    | 'Jynx'
    | 'Mr. Mime'
    | 'Lickitung'
    | 'Togepi'
    | 'Beldum'
    | 'Skorupi'
    | 'Combee'
    | 'Burmy (plant)'
    | 'Cherubi'
    | 'Spiritomb'
    | 'Zorua'
    | 'Meloetta (pirouette)'
    | 'Furfrou (Debutante)'
    | 'Furfrou (Diamond)'
    | 'Furfrou (Matron)'
    | 'Furfrou (Dandy)'
    | 'Furfrou (Kabuki)'
    | 'Furfrou (Pharaoh)'
    | 'Type: Null'
    | 'Poipole'
    | 'Cosmog'
    | 'Eternatus'
    | 'Toxel'
    | 'Berry_Shovel'
    | 'RareCandy'
    | 'Protein'
    | 'Dungeon_ticket'
    | 'Explorer_kit'
    | 'Squirtbottle'
    | 'Sprinklotad'
    | 'Explosive_Charge'
    | 'Treasure_Scanner';
