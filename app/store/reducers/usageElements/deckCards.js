const deckCards = {
    age1: [
        {
            id: 1,
            name: 'Zielarnia',
            type: 'science',
            supply: {
                'sym_garnek': 1
            },
            symbol: 'rack',
            cost: {
                'gold': 2
            },
            free_build: false
        },
        {
            id: 2,
            name: 'Wytwornia papirusu',
            type: 'material',
            supply: {
                'papyrus': 1
            },
            symbol: false,
            cost: {
                'gold': 1
            },
            free_build: false
        },
        {
            id: 3,
            name: 'Łaźnie',
            type: 'cultural',
            supply: {
                'cultural': 3
            },
            symbol: 'tear',
            cost: {
                'stone': 1
            },
            free_build: false
        },
        {
            id: 4,
            name: 'Palisada',
            type: 'military',
            supply: {
                'military': 1
            },
            symbol: 'tower',
            cost: {
                'gold': 2
            },
            free_build: false
        },
        {
            id: 5,
            name: 'Magazyn gliny',
            type: 'merchant',
            supply: {
                'clay_discount': 1
            },
            symbol: false,
            cost: {
                'gold': 3
            },
            free_build: false
        },
        {
            id: 6,
            name: 'Huta szkła',
            type: 'material',
            supply: {
                'glass': 1
            },
            symbol: false,
            cost: {
                'gold': 1
            },
            free_build: false
        },
        {
            id: 7,
            name: 'Skład drewna',
            type: 'stock',
            supply: {
                'wood': 1
            },
            symbol: false,
            cost: {
                'gold': 1
            },
            free_build: false
        },
        {
            id: 8,
            name: 'Składowisko kamienia',
            type: 'stock',
            supply: {
                'stone': 1
            },
            symbol: false,
            cost: {
                'gold': 1
            },
            free_build: false
        },
        {
            id: 9,
            name: 'Glinianka',
            type: 'stock',
            supply: {
                'clay': 1
            },
            symbol: false,
            cost: false,
            free_build: false
        },
        {
            id: 10,
            name: 'Apteka',
            type: 'science',
            supply: {
                'sym_kolo': 1,
                'cultural': 1
            },
            symbol: false,
            cost: {
                'glass': 1
            },
            free_build: false
        },
        {
            id: 11,
            name: 'Magazyn drewna',
            type: 'merchant',
            supply: {
                'wood_discount': 1
            },
            symbol: false,
            cost: {
                'gold': 3
            },
            free_build: false
        },
        {
            id: 12,
            name: 'Wieża strażnicza',
            type: 'military',
            supply: {
                'military': 1
            },
            symbol: false,
            cost: false,
            free_build: false
        },
        {
            id: 13,
            name: 'Stajnie',
            type: 'military',
            supply: {
                'military': 1
            },
            symbol: 'horseshoe',
            cost: {
                'wood': 1
            },
            free_build: false
        },
        {
            id: 14,
            name: 'Garnizon',
            type: 'military',
            supply: {
                'military': 1
            },
            symbol: 'sword',
            cost: {
                'clay': 1
            },
            free_build: false
        },
        {
            id: 15,
            name: 'Kamieniołom',
            type: 'stock',
            supply: {
                'stone': 1
            },
            symbol: false,
            cost: false,
            free_build: false
        },
        {
            id: 16,
            name: 'Wycinka',
            type: 'stock',
            supply: {
                'wood': 1
            },
            symbol: false,
            cost: false,
            free_build: false
        },
        {
            id: 17,
            name: 'Skryptorium',
            type: 'science',
            supply: {
                'sym_pioro': 1
            },
            symbol: 'book',
            cost: {
                'gold': 2
            },
            free_build: false
        },
        {
            id: 18,
            name: 'Złoża gliny',
            type: 'stock',
            supply: {
                'clay': 1
            },
            symbol: false,
            cost: {
                'gold': 1
            },
            free_build: false
        },
        {
            id: 19,
            name: 'Ołtarz',
            type: 'cultural',
            supply: {
                'cultural': 3
            },
            symbol: 'moon',
            cost: false,
            free_build: false
        },
        {
            id: 20,
            name: 'Teatr',
            type: 'cultural',
            supply: {
                'cultural': 3
            },
            symbol: 'mask',
            cost: false,
            free_build: false
        },
        {
            id: 21,
            name: 'Magazyn kamienia',
            type: 'merchant',
            supply: {
                'stone_discount': true
            },
            symbol: false,
            cost: {
                'gold': 3
            },
            free_build: false
        },
        {
            id: 22,
            name: 'Tawerna',
            type: 'merchant',
            supply: {
                'gold': 4
            },
            symbol: 'jug',
            cost: false,
            free_build: false
        },
        {
            id: 23,
            name: 'Warsztat',
            type: 'science',
            supply: {
                'sym_trojkat': 1,
                'cultural': 1
            },
            symbol: false,
            cost: {
                'papyrus': 1
            },
            free_build: false
        }
    ],
    age2: [
        {
            id: 24,
            name: 'Ambulatorium',
            type: 'science',
            supply: {
                'sym_garnek': 1,
                'cultural': 2
            },
            symbol: false,
            cost: {
                'clay': 2,
                'stone': 1
            },
            free_build: 'rack'
        },
        {
            id: 25,
            name: 'Stadniny',
            type: 'military',
            supply: {
                'military': 1
            },
            symbol: false,
            cost: {
                'clay': 1,
                'wood': 1
            },
            free_build: 'horseshoe'
        },
        {
            id: 26,
            name: 'Browar',
            type: 'merchant',
            supply: {
                'gold': 6
            },
            symbol: 'barrel',
            cost: false,
            free_build: false
        },
        {
            id: 27,
            name: 'Świątynia',
            type: 'cultural',
            supply: {
                'cultural': 4
            },
            symbol: 'sun',
            cost: {
                'wood': 1,
                'papyrus': 1
            },
            free_build: 'moon'
        },
        {
            id: 28,
            name: 'Posąg',
            type: 'cultural',
            supply: {
                'cultural': 4
            },
            symbol: 'column',
            cost: {
                'clay': 2
            },
            free_build: 'mask'
        },
        {
            id: 29,
            name: 'Kamieniołom stokowy',
            type: 'stock',
            supply: {
                'stone': 2
            },
            symbol: false,
            cost: {
                'gold': 2
            },
            free_build: false
        },
        {
            id: 30,
            name: 'Urząd celny',
            type: 'merchant',
            supply: {
                'papyrus_discount': 1,
                'glass_discount': 1
            },
            symbol: false,
            cost: {
                'gold': 4
            },
            free_build: false
        },
        {
            id: 31,
            name: 'Karawanseraj',
            type: 'merchant',
            supply: {
                'partial_wood': 1,
                'partial_clay': 1,
                'partial_stone': 1
            },
            symbol: false,
            cost: {
                'gold': 2,
                'glass': 1,
                'papyrus': 1
            },
            free_build: false
        },
        {
            id: 32,
            name: 'Mury obronne',
            type: 'military',
            supply: {
                'military': 2
            },
            symbol: false,
            cost: {
                'stone': 2
            },
            free_build: false
        },
        {
            id: 33,
            name: 'Tartak',
            type: 'stock',
            supply: {
                'wood': 2
            },
            symbol: false,
            cost: {
                'gold': 2
            },
            free_build: false
        },
        {
            id: 34,
            name: 'Szkoła',
            type: 'science',
            supply: {
                'sym_kolo': 1
            },
            symbol: 'harfa',
            cost: {
                'wood': 1,
                'papyrus': 2
            },
            free_build: false
        },
        {
            id: 35,
            name: 'Forum',
            type: 'merchant',
            supply: {
                'partial_glass': 1,
                'partial_papyrus': 1
            },
            symbol: false,
            cost: {
                'gold': 3,
                'clay': 1
            },
            free_build: false
        },
        {
            id: 36,
            name: 'Koszary',
            type: 'military',
            supply: {
                'military': 1
            },
            symbol: false,
            cost: {
                'gold': 3
            },
            free_build: 'sword'
        },
        {
            id: 37,
            name: 'Mównica',
            type: 'cultural',
            supply: {
                'cultural': 4
            },
            symbol: 'template',
            cost: {
                'stone': 1,
                'wood': 1
            },
            free_build: false
        },
        {
            id: 38,
            name: 'Plac apelowy',
            type: 'military',
            supply: {
                'military': 2
            },
            symbol: 'helmet',
            cost: {
                'clay': 2,
                'glass': 1
            },
            free_build: false
        },
        {
            id: 39,
            name: 'Tor strzelecki',
            type: 'military',
            supply: {
                'military': 2
            },
            symbol: 'target',
            cost: {
                'stone': 1,
                'wood': 1,
                'papyrus': 1
            },
            free_build: false
        },
        {
            id: 40,
            name: 'Gmach sądu',
            type: 'cultural',
            supply: {
                'cultural': 5
            },
            symbol: false,
            cost: {
                'wood': 2,
                'glass': 1
            },
            free_build: false
        },
        {
            id: 41,
            name: 'Suszarnia papirusu',
            type: 'material',
            supply: {
                'papyrus': 1
            },
            symbol: false,
            cost: false,
            free_build: false
        },
        {
            id: 42,
            name: 'Biblioteka',
            type: 'science',
            supply: {
                'sym_pioro': 1
            },
            symbol: false,
            cost: {
                'stone': 1,
                'wood': 1,
                'glass': 1
            },
            free_build: 'book'
        },
        {
            id: 43,
            name: 'Cegielnia',
            type: 'stock',
            supply: {
                'clay': 2
            },
            symbol: false,
            cost: {
                'gold': 2
            },
            free_build: false
        },
        {
            id: 44,
            name: 'Akwedukt',
            type: 'cultural',
            supply: {
                'cultural': 5
            },
            symbol: false,
            cost: {
                'stone': 3
            },
            free_build: 'tear'
        },
        {
            id: 45,
            name: 'Pracownia wyrobu szkła',
            type: 'material',
            supply: {
                'glass': 1
            },
            symbol: false,
            cost: false,
            free_build: false
        },
        {
            id: 46,
            name: 'Laboratorium',
            type: 'science',
            supply: {
                'sym_trojkat': 1,
                'cultural': 1
            },
            symbol: 'lamp',
            cost: {
                'wood': 1,
                'glass': 2
            },
            free_build: false
        }
    ],
    age3: [
        {
            id: 47,
            name: 'Akademia',
            type: 'science',
            supply: {
                'sym_zegar': 1,
                'cultural': 3
            },
            symbol: false,
            cost: {
                'stone': 1,
                'wood': 1,
                'glass': 2
            },
            free_build: false
        },
        {
            id: 48,
            name: 'Ogrody',
            type: 'cultural',
            supply: {
                'cultural': 6
            },
            symbol: false,
            cost: {
                'clay': 2,
                'wood': 2
            },
            free_build: 'column'
        },
        {
            id: 49,
            name: 'Izba handlowa',
            type: 'merchant',
            supply: {
                'gold_from_material': 3,
                'cultural': 3
            },
            symbol: false,
            cost: {
                'papyrus': 2
            },
            free_build: false
        },
        {
            id: 50,
            name: 'Świątynia',
            type: 'cultural',
            supply: {
                'cultural': 7
            },
            symbol: false,
            cost: {
                'clay': 1,
                'stone': 1,
                'wood': 1,
                'glass': 2
            },
            free_build: false
        },
        {
            id: 51,
            name: 'Uniwersytet',
            type: 'science',
            supply: {
                'sym_glob': 1,
                'cultural': 2
            },
            symbol: false,
            cost: {
                'clay': 1,
                'glass': 1,
                'papyrus': 1
            },
            free_build: 'harfa'
        },
        {
            id: 52,
            name: 'Panteon',
            type: 'cultural',
            supply: {
                'cultural': 6
            },
            symbol: false,
            cost: {
                'clay': 1,
                'wood': 1,
                'papyrus': 2
            },
            free_build: 'sun'
        },
        {
            id: 53,
            name: 'Cyrk',
            type: 'military',
            supply: {
                'military': 2
            },
            symbol: false,
            cost: {
                'clay': 2,
                'stone': 2
            },
            free_build: 'helmet'
        },
        {
            id: 54,
            name: 'Port',
            type: 'merchant',
            supply: {
                'gold_from_stock': 2,
                'cultural': 3
            },
            symbol: false,
            cost: {
                'wood': 1,
                'glass': 1,
                'papyrus': 1
            },
            free_build: false
        },
        {
            id: 55,
            name: 'Latarnia morska',
            type: 'merchant',
            supply: {
                'gold_from_merchant': 1,
                'cultural': 3
            },
            symbol: false,
            cost: {
                'clay': 2,
                'glass': 1
            },
            free_build: 'jug'
        },
        {
            id: 56,
            name: 'Siedziba Trybuna',
            type: 'military',
            supply: {
                'military': 3
            },
            symbol: false,
            cost: {
                'gold': 8
            },
            free_build: false
        },
        {
            id: 57,
            name: 'Budynek senatu',
            type: 'cultural',
            supply: {
                'cultural': 5
            },
            symbol: false,
            cost: {
                'clay': 2,
                'stone': 1,
                'papyrus': 1
            },
            free_build: 'template'
        },
        {
            id: 58,
            name: 'Fortyfikacje',
            type: 'military',
            supply: {
                'military': 2
            },
            symbol: false,
            cost: {
                'stone': 2,
                'clay': 1,
                'papyrus': 1
            },
            free_build: 'tower'
        },
        {
            id: 59,
            name: 'Obelisk',
            type: 'cultural',
            supply: {
                'cultural': 5
            },
            symbol: false,
            cost: {
                'stone': 1,
                'glass': 1
            },
            free_build: false
        },
        {
            id: 60,
            name: 'Ratusz',
            type: 'cultural',
            supply: {
                'cultural': 7
            },
            symbol: false,
            cost: {
                'stone': 3,
                'wood': 2
            },
            free_build: false
        },
        {
            id: 61,
            name: 'Machiny oblężnicze',
            type: 'military',
            supply: {
                'military': 2
            },
            symbol: false,
            cost: {
                'wood': 3,
                'glass': 1
            },
            free_build: 'target'
        },
        {
            id: 62,
            name: 'Pracownia naukowa',
            type: 'science',
            supply: {
                'sym_zegar': 1,
                'cultural': 3
            },
            symbol: false,
            cost: {
                'wood': 2,
                'glass': 1,
                'papyrus': 1
            },
            free_build: false
        },
        {
            id: 63,
            name: 'Zbrojownia',
            type: 'merchant',
            supply: {
                'gold_from_military': 1,
                'cultural': 3
            },
            symbol: false,
            cost: {
                'stone': 2,
                'glass': 1
            },
            free_build: false
        },
        {
            id: 64,
            name: 'Obserwatorium',
            type: 'science',
            supply: {
                'sym_glob': 1,
                'cultural': 2
            },
            symbol: false,
            cost: {
                'stone': 2,
                'papyrus': 1
            },
            free_build: 'lamp'
        },
        {
            id: 65,
            name: 'Arena',
            type: 'merchant',
            supply: {
                'gold_from_wonder': 2,
                'cultural': 3
            },
            symbol: false,
            cost: {
                'clay': 1,
                'stone': 1,
                'wood': 1
            },
            free_build: 'barrel'
        },
        {
            id: 66,
            name: 'Arsenał',
            type: 'military',
            supply: {
                'military': 3
            },
            symbol: false,
            cost: {
                'clay': 3,
                'wood': 2
            },
            free_build: false
        }
    ],
    guilds: [
        {
            id: 67,
            name: 'Cech budowniczych',
            type: 'guild',
            supply: {
                'cultural': 2,
                'from': 'wonder'
            },
            cost: {
                'stone': 2,
                'clay': 1,
                'wood': 1,
                'glass': 1
            }
        },
        {
            id: 68,
            name: 'Gildia strategów',
            type: 'guild',
            supply: {
                'cultural': 1,
                'gold': 1,
                'from': 'military'
            },
            cost: {
                'stone': 2,
                'clay': 1,
                'papyrus': 1
            }
        },
        {
            id: 69,
            name: 'Cech lichwiarzy',
            type: 'guild',
            supply: {
                'cultural': 1,
                'from': 'gold'
            },
            cost: {
                'stone': 2,
                'clay': 1,
                'papyrus': 1
            }
        },
        {
            id: 70,
            name: 'Cech armatorów',
            type: 'guild',
            supply: {
                'cultural': 1,
                'gold': 1,
                'from': 'products'
            },
            cost: {
                'clay': 1,
                'stone': 1,
                'glass': 1,
                'papyrus': 1
            }
        },
        {
            id: 71,
            name: 'Stowarzyszenie urzędników',
            type: 'guild',
            supply: {
                'cultural': 1,
                'gold': 1,
                'from': 'cultural'
            },
            cost: {
                'wood': 2,
                'clay': 1,
                'papyrus': 1
            }
        },
        {
            id: 72,
            name: 'Gildia kupiecka',
            type: 'guild',
            supply: {
                'cultural': 1,
                'gold': 1,
                'from': 'merchant'
            },
            cost: {
                'clay': 1,
                'wood': 1,
                'glass': 1,
                'papyrus': 1
            }
        },
        {
            id: 73,
            name: 'Towarzystwo naukowe',
            type: 'guild',
            supply: {
                'cultural': 1,
                'gold': 1,
                'from': 'science'
            },
            cost: {
                'clay': 2,
                'wood': 2
            }
        }
    ]
};

export default (state = deckCards) => state;
