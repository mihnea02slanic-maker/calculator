/**
 * GTA V RAGE:MP Crafting Recipes Database
 * Rețete de la serverul tău
 */

const RECIPES = {
    // ═══════════════════════════════════════════════════════════
    // DROGURI - Rețete din imagine
    // ═══════════════════════════════════════════════════════════
    
    "SERINGIMETH": {
        name: "Seringă Meth",
        category: "drog",
        materials: {
            "Amoniac": 0.5,
            "Detergent": 1,
            "Absinth": 2,
            "Seringa": 1
        },
        money: 3000
    },
    
    "JOINT": {
        name: "Joint Marijuana",
        category: "drog",
        materials: {
            "Muguri": 0.25,
            "Grinder": 1,
            "Filtre": 1,
            "Foi": 1
        },
        money: 900
    },
    
    "PLICCOCA": {
        name: "Plic Cocaina",
        category: "drog",
        materials: {
            "Frunze": 3,
            "Sodiu": 0.25,
            "Amoniac": 0.25,
            "Plicuri": 1
        },
        money: 2400
    },
    
    "PLICCRACK": {
        name: "Plic Crack",
        category: "drog",
        materials: {
            "Plic Cocaina": 1,
            "Bricheta": 1,
            "Sticla de apa": 4
        },
        money: 3179
    },
    
    "PASTILAADERALL": {
        name: "Pastila Aderall",
        category: "drog",
        materials: {
            "Acetona": 1,
            "Acid benzoic": 1,
            "Borcan meth": 1,
            "Tub pastile": 1
        }
    },
    
    // ═══════════════════════════════════════════════════════════
    // ARME - Rețete din pozele tale
    // ═══════════════════════════════════════════════════════════
    
    // ORDINE: 1.Navy, 2.DB, 3.SG, 4.TEC, 5.Micro SMG
    
    "NAVYREVOLVER": {
        name: "Navy Revolver (Navy)",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 15
        },
        money: 195000
    },
    
    "DOUBLEACTION": {
        name: "Double Action (DB)",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 9
        },
        money: 130000
    },
    
    "SAWNOFFSHOTGUN": {
        name: "Sawnoff Shotgun (SG)",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 12
        },
        money: 145000
    },
    
    "MACHINEPISTOL": {
        name: "Machine Pistol (TEC)",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 5
        },
        money: 97500
    },
    
    "MICROSMG": {
        name: "Micro SMG",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 3
        },
        money: 39000
    },
    
    "MG": {
        name: "MG (MG)",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 15
        },
        money: 390000
    },
    
    // Alte arme
    "PISTOL": {
        name: "Pistol",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 1
        },
        money: 13000
    },
    
    "CERAMICPISTOL": {
        name: "Ceramic Pistol",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 4
        },
        money: 45500
    },
    
    "ASSAULTRIFLE_MK2": {
        name: "Assault MK2",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 10
        },
        money: 65000
    },
    
    "COMPACTRIFLE": {
        name: "Compact Rifle",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 12
        },
        money: 117000
    },
    
    "GUSENBERG": {
        name: "Gusenberg",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 13
        },
        money: 162500
    },
    
    "ASSAULTRIFLE": {
        name: "Assault Rifle",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 7
        },
        money: 58500
    },
    
    "PISTOL50": {
        name: "Pistol 50",
        category: "arma",
        materials: {
            "Teava": 1,
            "Cadru": 1,
            "Mecanism": 1,
            "Elemente Fixare": 3
        },
        money: 32500
    },
    
    // ═══════════════════════════════════════════════════════════
    // ARME ALBE (MELEE)
    // ═══════════════════════════════════════════════════════════
    
    "KNIFE": {
        name: "Knife",
        category: "arma",
        materials: {
            "Otel": 1,
            "Elemente Fixare": 1
        },
        money: 13000
    },
    
    "BAT": {
        name: "Bat",
        category: "arma",
        materials: {
            "Lemn": 5,
            "Elemente Fixare": 2
        },
        money: 8000
    },
    
    "KNUCKLE": {
        name: "Knuckle",
        category: "arma",
        materials: {
            "Metal": 3,
            "Elemente Fixare": 2
        },
        money: 15000
    },
    
    "DAGGER": {
        name: "Dagger",
        category: "arma",
        materials: {
            "Otel": 1,
            "Lemn": 1,
            "Elemente Fixare": 5
        },
        money: 13000
    },
    
    "SWITCHBLADE": {
        name: "Switchblade",
        category: "arma",
        materials: {
            "Otel": 2,
            "Plastic": 1,
            "Elemente Fixare": 3
        },
        money: 18000
    },
    
    "MACHETE": {
        name: "Machete",
        category: "arma",
        materials: {
            "Otel": 2,
            "Lemn": 1,
            "Elemente Fixare": 5
        },
        money: 26000
    },
    
    "BATTLEAXE": {
        name: "Battleaxe",
        category: "arma",
        materials: {
            "Otel": 3,
            "Lemn": 2,
            "Elemente Fixare": 4
        },
        money: 22000
    },
    
    "FLASHLIGHT": {
        name: "Flashlight",
        category: "arma",
        materials: {
            "Metal": 1,
            "Plastic": 1,
            "Bec": 1,
            "Elemente Fixare": 1
        },
        money: 13000
    },
    
    // ═══════════════════════════════════════════════════════════
    // ATASAMENTE ARME
    // ═══════════════════════════════════════════════════════════
    
    // ::: Pistol 50 :::
    "PISTOL50_EXTENDED": {
        name: "Pistol 50 - Extended Weapon",
        category: "atasament",
        materials: {
            "Arc": 5,
            "Otel": 1,
            "Elemente Fixare": 2
        }
    },
    
    "PISTOL50_FLASHLIGHT": {
        name: "Pistol 50 - Flash Light",
        category: "atasament",
        materials: {
            "Elemente Fixare": 1,
            "Otel": 1,
            "Lanterna": 1,
            "Lupe": 2
        }
    },
    
    "PISTOL50_SUPPRESSOR": {
        name: "Pistol 50 - Suppressor",
        category: "atasament",
        materials: {
            "Cauciuc": 3,
            "Otel": 1,
            "Elemente Fixare": 2
        }
    },
    
    // ::: Pistol MK2 :::
    "PISTOLMK2_EXTENDED": {
        name: "Pistol MK2 - Extended Weapon",
        category: "atasament",
        materials: {
            "Arc": 5,
            "Otel": 1,
            "Elemente Fixare": 3
        }
    },
    
    "PISTOLMK2_FLASHLIGHT": {
        name: "Pistol MK2 - Flash Light",
        category: "atasament",
        materials: {
            "Elemente Fixare": 1,
            "Otel": 1,
            "Lanterna": 1,
            "Lupe": 2
        }
    },
    
    "PISTOLMK2_SUPPRESSOR": {
        name: "Pistol MK2 - Suppressor",
        category: "atasament",
        materials: {
            "Cauciuc": 3,
            "Otel": 1,
            "Elemente Fixare": 3
        }
    },
    
    "PISTOLMK2_SCOPE": {
        name: "Pistol MK2 - Scope",
        category: "atasament",
        materials: {
            "Lupe": 2,
            "Otel": 1,
            "Elemente Fixare": 1
        }
    },
    
    "PISTOLMK2_COMPENSATOR": {
        name: "Pistol MK2 - Compensator",
        category: "atasament",
        materials: {
            "Otel": 1,
            "Elemente Fixare": 1
        }
    },
    
    // ::: Machine Pistol (TEC) :::
    "MACHINEPISTOL_EXTENDED": {
        name: "Machine Pistol (TEC) - Extended Weapon",
        category: "atasament",
        materials: {
            "Arc": 5,
            "Otel": 1,
            "Elemente Fixare": 3
        }
    },
    
    "MACHINEPISTOL_SUPPRESSOR": {
        name: "Machine Pistol (TEC) - Suppressor",
        category: "atasament",
        materials: {
            "Cauciuc": 3,
            "Otel": 1,
            "Elemente Fixare": 3
        }
    },
    
    // ::: Micro-SMG :::
    "MICROSMG_EXTENDED": {
        name: "Micro-SMG - Extended Weapon",
        category: "atasament",
        materials: {
            "Arc": 5,
            "Otel": 1,
            "Elemente Fixare": 2
        }
    },
    
    "MICROSMG_SUPPRESSOR": {
        name: "Micro-SMG - Suppressor",
        category: "atasament",
        materials: {
            "Cauciuc": 3,
            "Otel": 1,
            "Elemente Fixare": 2
        }
    },
    
    "MICROSMG_FLASHLIGHT": {
        name: "Micro-SMG - Flash Light",
        category: "atasament",
        materials: {
            "Elemente Fixare": 1,
            "Otel": 1,
            "Lanterna": 1,
            "Lupe": 2
        }
    },
    
    "MICROSMG_SCOPE": {
        name: "Micro-SMG - Scope",
        category: "atasament",
        materials: {
            "Lupe": 2,
            "Otel": 1,
            "Elemente Fixare": 1
        }
    },
    
    // ::: MG (Mini-Gun) :::
    "MG_EXTENDED": {
        name: "MG (Mini-Gun) - Extended Weapon",
        category: "atasament",
        materials: {
            "Arc": 10,
            "Otel": 1,
            "Elemente Fixare": 5
        }
    },
    
    "MG_SCOPE": {
        name: "MG (Mini-Gun) - Scope",
        category: "atasament",
        materials: {
            "Lupe": 2,
            "Otel": 1,
            "Elemente Fixare": 1
        }
    },
    
    // ::: Assault Rifle (AK47) :::
    "AK47_EXTENDED": {
        name: "Assault Rifle (AK47) - Extended Weapon",
        category: "atasament",
        materials: {
            "Arc": 8,
            "Otel": 1,
            "Elemente Fixare": 8
        }
    },
    
    "AK47_SUPPRESSOR": {
        name: "Assault Rifle (AK47) - Suppressor",
        category: "atasament",
        materials: {
            "Cauciuc": 3,
            "Otel": 1,
            "Elemente Fixare": 2
        }
    },
    
    "AK47_FLASHLIGHT": {
        name: "Assault Rifle (AK47) - Flash Light",
        category: "atasament",
        materials: {
            "Elemente Fixare": 1,
            "Otel": 1,
            "Lanterna": 1,
            "Lupe": 2
        }
    },
    
    "AK47_SCOPE": {
        name: "Assault Rifle (AK47) - Scope",
        category: "atasament",
        materials: {
            "Lupe": 2,
            "Otel": 1,
            "Elemente Fixare": 2
        }
    },
    
    "AK47_GRIP": {
        name: "Assault Rifle (AK47) - Grip",
        category: "atasament",
        materials: {
            "Cauciuc": 2
        }
    },
    
    // ::: Assault Rifle MK2 (M4) :::
    "M4_EXTENDED": {
        name: "Assault Rifle MK2 (M4) - Extended Weapon",
        category: "atasament",
        materials: {
            "Arc": 8,
            "Otel": 1,
            "Elemente Fixare": 8
        }
    },
    
    "M4_SUPPRESSOR": {
        name: "Assault Rifle MK2 (M4) - Suppressor",
        category: "atasament",
        materials: {
            "Cauciuc": 3,
            "Otel": 1,
            "Elemente Fixare": 2
        }
    },
    
    "M4_FLASHLIGHT": {
        name: "Assault Rifle MK2 (M4) - Flash Light",
        category: "atasament",
        materials: {
            "Elemente Fixare": 1,
            "Otel": 1,
            "Lanterna": 1,
            "Lupe": 2
        }
    },
    
    "M4_SCOPE": {
        name: "Assault Rifle MK2 (M4) - Scope",
        category: "atasament",
        materials: {
            "Lupe": 2,
            "Otel": 1,
            "Lanterna": 1,
            "Elemente Fixare": 2
        }
    },
    
    "M4_GRIP": {
        name: "Assault Rifle MK2 (M4) - Grip",
        category: "atasament",
        materials: {
            "Cauciuc": 2
        }
    },
    
    "M4_HOLOGRAPHIC": {
        name: "Assault Rifle MK2 (M4) - Holographic",
        category: "atasament",
        materials: {
            "Lupe": 2,
            "Otel": 1,
            "Lanterna": 1,
            "Elemente Fixare": 2
        }
    },
    
    "M4_SMALL_SCOPE": {
        name: "Assault Rifle MK2 (M4) - Small Scope",
        category: "atasament",
        materials: {
            "Lupe": 2,
            "Otel": 1,
            "Lanterna": 1,
            "Elemente Fixare": 2
        }
    },
    
    "M4_LARGE_SCOPE": {
        name: "Assault Rifle MK2 (M4) - Large Scope",
        category: "atasament",
        materials: {
            "Lupe": 2,
            "Otel": 1,
            "Lanterna": 1,
            "Elemente Fixare": 2
        }
    },
    
    "M4_MUZZLE": {
        name: "Assault Rifle MK2 (M4) - Muzzle",
        category: "atasament",
        materials: {
            "Otel": 2,
            "Elemente Fixare": 2
        }
    },
    
    "M4_HEAVY_BARREL": {
        name: "Assault Rifle MK2 (M4) - Heavy Barrel",
        category: "atasament",
        materials: {
            "Otel": 2,
            "Elemente Fixare": 2
        }
    },
    
    // ::: Compact Rifle :::
    "COMPACTRIFLE_EXTENDED": {
        name: "Compact Rifle - Extended Weapon",
        category: "atasament",
        materials: {
            "Arc": 8,
            "Otel": 1,
            "Elemente Fixare": 8
        }
    },
    
    // ::: Skin (General) :::
    "SKIN_ARMA": {
        name: "Skin Armă (orice armă)",
        category: "atasament",
        materials: {
            "Vopsea": 3
        }
    },
    
    // ═══════════════════════════════════════════════════════════
    // PRETURI MATERIALE CRAFTING (pentru referință)
    // ═══════════════════════════════════════════════════════════
    // Cauciuc - 2090$
    // Lanterna - 1000$
    // Lupa - 750$
    // Arc - 1500$
    // Vopsea - 2500$
};

// Export pentru module (dacă e necesar)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RECIPES };
}
