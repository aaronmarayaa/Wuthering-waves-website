function filterCharacters() {
    const selectedElement = document.getElementById('element-select').value;
    const selectedWeapon = document.getElementById('weapon-select').value;
    const characterDivs = document.querySelectorAll('#characters-cell > div');
    
    if (selectedElement === 'all' && selectedWeapon === 'all') {
        characterDivs.forEach(div => div.classList.remove('selected-element'));
        return;
    }

    characterDivs.forEach(div => {
        const characterElement = div.getAttribute('data-element');
        const characterWeapon = div.getAttribute('data-weapon');
        
        div.classList.remove('selected-element');
        
        let matchesElement = selectedElement === 'all' || characterElement === selectedElement;
        let matchesWeapon = selectedWeapon === 'all' || characterWeapon === selectedWeapon;
        
        if (matchesElement && matchesWeapon) {
            div.classList.add('selected-element');
        }
    });
}

const characters = {
    calcharo: {
        name: "Calcharo",
        rarity: 5,
        element: "Electro",
        theme: "#c071ff",
        health: 10500,
        attack: 437,
        defense: 1185,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/calcharo-pile.png',
        elementImage: '/assets/images/element-icons/electro-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/thundering-tacet-core-icon.png',
        ascensionName1: "Thundering Tacet core",
        ascensionImage2: 'assets/images/ascencion-icons/iris-icon.png',
        ascensionName2: "Iris",
        ascensionImage3: 'assets/images/ascencion-icons/tailored-ring-icon.png',
        ascensionName3: "Tailored ring",
        buildStats: {
            health: 15060,
            attack: 2404,
            defense: 1185,
            critrate: "71.3%",
            critDmg: "278.0%",
            eregen: "100%",
            resSkill: 0,
            basicAttack: "36.0",
            heavyAttack: 0,
            resLib: "9.0",
            glacio: 0,
            fusion: 0,
            electro: "70.0%",
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Broadblade", 
            weaponIconImage:'assets/images/weapon-icons/broadblade-icon.png',
            weaponName: "Ages of Harvest",
            weaponImage: 'assets/images/weapon-image/ages-of-harvest.png',
            weaponDescription: "Grants 24% Attribute DMG Bonus. Casting Intro Skill gives the equipper Ageless Marking, " +
                            "which grants 48% Resonance Skill DMG Bonus for 12s. Casting Resonance Skill gives the equipper Ethereal Endowment, which grants 48% Resonance Skill DMG Bonus for 12s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. Rate 25.30%"
        },
        echoElementImage: 'assets/images/element-icons/w-electro-icon.png',
        echoElementOutline: "2px solid #c071ff",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/thundering-mephis.png',
            echoName: "Thundering Mephis"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/flautist.png',
            echoName1: "Flautist",
            echoImage2: 'assets/images/echo-images/lumiscale-construct.png',
            echoName2: "Lumiscale Construct"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/electro-predator.png',
            echoName1: "Electro Predator",
            echoImage2: 'assets/images/echo-images/traffic-illuminator.png',
            echoName2: "Traffic Illuminator"
        },
        echoAttribute: {
            echoAttribute1: "Electro DMG + 10%.",
            echoAttribute2: "Electro DMG + 15% after releasing Heavy Attack or Resonance Skill. This effect stacks up to 2 times, each stack lasts 15s."
        },
        echoAbilityIcon: 'assets/images/echo-images/mephis-icon.png',
        echoAbilityDescription: "Transform into Thundering Mephis, engaging in a rapid assault of up to 6 strikes. " +
        "The first 5 strikes deal 132.61% Electro DMG each, while the final strike inflicts 189.44% Electro DMG, " +
        "with an additional 31.57% Electro DMG from the thunder. After the final hit, increase the current character's " +
        "Electro DMG by 12.00% and Resonance Liberation DMG by 12.00% for 15s. CD: 20s",
        normalAttack: {
            normalAttackImage: 'assets/images/skill-icons/basic-attack.png',
            normalAttackName: "Gnawing Fangs",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Calcharo performs up to 4 consecutive attacks, dealing Electro DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Consumes STA to attack the target, dealing Electro DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Consumes STA to perform a Mid-Air Plunging Attack, dealing Electro DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Electro DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/calcharo-resSkill.png',
            resSKillName: "Extermination Order",
            resSKill_p: "Calcharo performs up to 3 consecutive attacks, dealing Electro DMG. " +
                        "If Calcharo is switched off field, or if Resonance Skill Extermination Order is not activated " +
                        "again in a while, this skill will enter Cooldown. Resonance Skill Extermination Order does " +
                        "not interrupt Calcharo's Basic Attack cycle.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/calcharo-resLiberation.png',
            resLibName: "Phantom Etching",
            resLib_p: "Calcharo attacks the target, dealing Electro DMG and enters Deathblade Gear state. " +
                    "After Deathblade Gear state ends, Calcharo's next Intro Skill is replaced with Intro Skill " +
                    "\"Necessary Means\", which deals Electro DMG, considered as Intro Skill DMG.",
            resLib_dt1: "Deathblade Gear",
            resLib_dd1: "-Basic Attack is replaced with Basic Attack Hounds Roar. -Heavy Attack deals increased DMG, considered as Resonance Liberation DMG.",
            resLib_dd2: "-Dodge Counter deals increased DMG, considered as Resonance Liberation DMG.",

            resLib_dt2: "Basic Attack: Hounds Roar",
            resLib_dd3: "Calcharo performs up to 5 consecutive attacks, dealing Electro DMG, considered as Basic Attack DMG.",

            resLib_dt3: "",
            resLib_dd4: "",

            resLib_dt4: "",
            resLib_dd5: "",

            resLib_dt5: "",
            resLib_dd6: "",
        },
        forteCircuit: {
            forteCircuitImage: 'assets/images/skill-icons/calcharo-forteCircuit.png',
            forteCircuitName: "Hunting Mission",
            forteCircuit_p: "",
            forteCircuit_dt1: "Heavy Attack: \"Mercy\"",
            forteCircuit_dd1: "When Calcharo has 3 \"Cruelty\", his Heavy Attack is replaced with Heavy Attack \"Mercy\". " +
                        "When casting Heavy Attack \"Mercy\", Calcharo consumes 3 \"Cruelty\" to deal Electro DMG, " +
                        "considered as Heavy Attack DMG, and recovers Resonance Energy and Concerto Energy.",

            forteCircuit_dt2: "\"Cruelty\"",
            forteCircuit_dd2: "Calcharo can hold up to 3 \"Cruelty\". Under Resonance Liberation Deathblade Gear state, " +
                        "\"Cruelty\" cannot be acquired. When Resonance Skill Extermination Order hits the target, gain 1 \"Cruelty\".",

            forteCircuit_dt3: "Heavy Attack: \"Death Messenger\"",
            forteCircuit_dd3: "When Calcharo has 5 \"Killing Intent\", his Basic Attack is replaced with Heavy Attack \"Death Messenger\". " +
                        "When casting Heavy Attack \"Death Messenger\", Calcharo consumes 5 \"Killing Intent\" to deal Electro DMG, " +
                        "considered as Resonance Liberation DMG, and recovers Resonance Energy and Concerto Energy.",

            forteCircuit_dt4: "\"Killing Intent\"",
            forteCircuit_dd4: "Under Resonance Liberation Deathblade Gear state, Calcharo's Forte Gauge is replaced with \"Killing Intent\", stacking up to 5. " +
                        "When Basic Attack Hounds Roar hits the target, Calcharo gains 1 \"Killing Intent\".",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/calcharo-introSkill.png',
            introSkillName: "Wanted Outlaw",
            introSkillDetail: "Attack the target, dealing Electro DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/calcharo-outroSkill.png',
            outroSkillName: "Shadowy Raid",
            outroSkillDetail: "Calcharo summons Phantom to support the active Resonator, clearing the targets in front with a slash. " +
                        "The Phantom's attack deals Electro DMG equal to 195.98%+391.96% of Calcharo's ATK."
        }
    },
    jiyan: {
        name: "Jiyan",
        rarity: 5,
        element: "Aero",
        theme: "#55ffb5",
        health: 10487,
        attack: 437,
        defense: 1185,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/jiyan-pile.png',
        elementImage: '/assets/images/element-icons/aero-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/roaring-rock-fist-icon.png',
        ascensionName1: "Roaring Rock Fist",
        ascensionImage2: 'assets/images/ascencion-icons/pecok-flower-icon.png',
        ascensionName2: "Pecok Flower",
        ascensionImage3: 'assets/images/ascencion-icons/ff-howler-core-icon.png',
        ascensionName3: "FF Howler Core",
        buildStats: {
            health: 15047,
            attack: 2404,
            defense: 1185,
            critrate: "72.2%",
            critDmg: "282.6%",
            eregen: "120%",
            resSkill: 0,
            basicAttack: 0,
            heavyAttack: "36.0%",
            resLib: 0,
            glacio: 0,
            fusion: 0,
            electro: 0,
            aero: "70.0%",
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Broadblade", 
            weaponIconImage:'assets/images/weapon-icons/broadblade-icon.png',
            weaponName: "Verdant Summit",
            weaponImage: 'assets/images/weapon-image/verdant-summit.png',
            weaponDescription: "Increases Attribute DMG Bonus by 24%. Every time Intro Skill or Resonance Liberation is cast, increases Heavy Attack DMG Bonus by 48%, " +
                        "stacking up to 2 time(s). This effect lasts for 14s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. DMG 48.60%"
        },
        echoElementImage: 'assets/images/element-icons/w-aero-icon.png',
        echoElementOutline: "2px solid #55ffb5",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/felian-beringal.png',
            echoName: "Feilian Beringal"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/hoochief.png',
            echoName1: "Hoochief",
            echoImage2: 'assets/images/echo-images/Carapace.png',
            echoName2: "Carapace"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/sabyr-board.png',
            echoName1: "Sabyr Boar",
            echoImage2: 'assets/images/echo-images/fusion-warrior.png',
            echoName2: "Fusion Warrior"
        },
        echoAttribute: {
            echoAttribute1: "Aero DMG + 10%.",
            echoAttribute2: "Aero DMG + 30% for 15s after releasing Intro Skill."
        },
        echoAbilityIcon: 'assets/images/echo-images/beringal-icon.png',
        echoAbilityDescription: "Transform into Feilian Beringal to perform a powerful kick. If the kick lands on an enemy, " +
                    "immediately perform a follow-up strike. The kick deals 231.84% Aero DMG, and the follow-up strike deals 283.36% Aero DMG. " +
                    "After the follow-up strike hits, the current character's Aero DMG increases by 12.00%, and the Heavy Attack DMG increases by 12.00% for 15s CD: 20s",
        normalAttack: {
            normalAttackImage: 'assets/images/skill-icons/basic-attack.png',
            normalAttackName: "Lone Lance",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Perform up to 5 consecutive attacks, dealing Aero DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Consume Stamina to thrust forward, dealing Aero DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Consume Stamina to perform a Plunging Attack while in mid-air, dealing Aero DMG. After performing the Plunging Attack, use Basic Attack to perform a follow-up attack, dealing Aero DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Aero DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/jiyan-resSkill.png',
            resSKillName: "Windqueller",
            resSKill_p: "Dash forward a certain distance, dealing Aero DMG. Can be cast in the air.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/jiyan-resLib.png',
            resLibName: "Emerald Storm - Prelude",
            resLib_p: "After releasing Emerald Storm - Prelude, Jiyan enters Qingloong Mode.",
            resLib_dt1: "Qingloong Mode",
            resLib_dd1: "Jiyan has increased resistance to interruption. Basic Attack, Heavy Attack and Dodge Counter are replaced with Heavy Attack Lance of Qingloong.",
            resLib_dd2: "",

            resLib_dt2: "Heavy Attack: Lance of Qingloong",
            resLib_dd3: "Perform up to 3 consecutive attacks, dealing Aero DMG, considered as Heavy Attack DMG.",

            resLib_dt3: "",
            resLib_dd4: "",

            resLib_dt4: "",
            resLib_dd5: "",

            resLib_dt5: "",
            resLib_dd6: "",
        },
        forteCircuit: {
            forteCircuitImage: 'assets/images/skill-icons/jiyan-forteCircuit.png',
            forteCircuitName: "Qingloong at War",
            forteCircuit_p: "When casting Resonance Skill Windqueller, if Jiyan has 30 or more \"Resolve\", he consumes 30 \"Resolve\" " +
                        "to increase the DMG of this Resonance Skill Windqueller by 20%. When Jiyan is in Qingloong Mode, DMG of Resonance Skill Windqueller is increased by 20% and no longer consumes \"Resolve\".",
            forteCircuit_dt1: "Resonance Liberation: Emerald Storm - Finale",
            forteCircuit_dd1: "When casting Resonance Liberation Emerald Storm - Prelude, if Jiyan has 30 " +
                        "\"Resolve\" or more, he will consume 30 \"Resolve\" to cast Emerald Storm - Finale, dealing Aero DMG, " +
                        "considered as Heavy Attack DMG. Emerald Storm: Finale can be cast in mid-air at low altitude.",

            forteCircuit_dt2: "Resolve",
            forteCircuit_dd2: "Jiyan can hold up to 60 Resolve. Jiyan gains \"Resolve\" when his Normal Attack Lone Lance hits the target. " +
                        "Jiyan gains \"Resolve\" when the Intro Skill Tactical Strike hits the target. \"Resolve\" will gradually decrease if Jiyan does not hit a target within 15s.",

            forteCircuit_dt3: "",
            forteCircuit_dd3: "",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/jiyan-introSkill.png',
            introSkillName: "Tactical Strike",
            introSkillDetail: "Jiyan pierces the target in mid-air, dealing Aero DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/jiyan-outroSkill.png',
            outroSkillName: "Discipline",
            outroSkillDetail: "When the incoming Resonator's Heavy Attack hits a target, " +
                        "Jiyan will summon a lance to launch a coordinated attack, dealing Aero DMG equal to 313.40% of Jiyan's ATK. " +
                        "This attack lasts for 8s and can be triggered once every 1s, up to 2 times."
        }
    },
    jinhsi: {
        name: "Jinhsi",
        rarity: 5,
        element: "Spectro",
        theme: "#fff348",
        health: 10825,
        attack: 412,
        defense: 1258,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/jinhsi-pile.png',
        elementImage: '/assets/images/element-icons/spectro-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/elegy-tacet-core-icon.png',
        ascensionName1: "Elegy Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/loongs-pearl-icon.png',
        ascensionName2: "Loong's Pearl",
        ascensionImage3: 'assets/images/ascencion-icons/ff-howler-core-icon.png',
        ascensionName3: "FF Howler Core",
        buildStats: {
            health: 15385,
            attack: 2269,
            defense: 1258,
            critrate: "66.4%",
            critDmg: "261.2%",
            eregen: "100%",
            resSkill: "37.6%",
            basicAttack: 0,
            heavyAttack: 0,
            resLib: 0,
            glacio: 0,
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: "70.0%",
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Broadblade", 
            weaponIconImage:'assets/images/weapon-icons/broadblade-icon.png',
            weaponName: "Ages of Harvest",
            weaponImage: 'assets/images/weapon-image/ages-of-harvest.png',
            weaponDescription: "Grants 24% Attribute DMG Bonus. Casting Intro Skill gives the equipper Ageless Marking, " +
                            "which grants 48% Resonance Skill DMG Bonus for 12s. Casting Resonance Skill gives the equipper Ethereal Endowment, which grants 48% Resonance Skill DMG Bonus for 12s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. Rate 25.30%"
        },
        echoElementImage: 'assets/images/element-icons/w-spectro-icon.png',
        echoElementOutline: "2px solid #fff348",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/jue.png',
            echoName: "Jué"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/lightcrusher.png',
            echoName1: "Lightcrusher",
            echoImage2: 'assets/images/echo-images/rocksteady-guardian.png',
            echoName2: "Rocksteady Guardian"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/glacio-predator.png',
            echoName1: "Glacio Predator",
            echoImage2: 'assets/images/echo-images/clang-bang.png',
            echoName2: "Clang Bang"
        },
        echoAttribute: {
            echoAttribute1: "Spectro DMG + 10%.",
            echoAttribute2: "Spectro DMG + 30% for 15s after releasing Intro Skill."
        },
        echoAbilityIcon: 'assets/images/echo-images/jue-icon.png',
        echoAbilityDescription: "Summon Jué to the aid. Jué soars through the air, dealing 48.64% Spectro DMG, " +
                    "and summons thunderbolts that strike nearby enemies up to 5 times, each hit dealing 19.46% Spectro DMG. " +
                    "Jué then spirals downward, attacking surrounding enemies twice, each hit dealing 48.64% Spectro DMG. " +
                    "Casting this Echo Skill grants the Resonator a Blessing of Time effect that lasts 15s, during when: - " +
                    "The Resonator gains 16.00% Resonance Skill DMG Bonus. - When the Resonator's Resonance Skill hits the target, " +
                    "inflict 16.00% Spectro DMG 1 time per second for 15s, considered as the Resonator's Resonance Skill DMG. CD: 20s",
        normalAttack: {
            normalAttackImage: 'assets/images/skill-icons/basic-attack.png',
            normalAttackName: "Slash of Breaking Dawn",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Perform up to 4 consecutive strikes, dealing Spectro DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Perform a charged attack at the cost of STA, dealing Spectro DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Perform a Plunging Attack while in mid-air at the cost of STA, dealing Spectro DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to counterattack, dealing Spectro DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/jinhsi-resSkill.png',
            resSKillName: "Trailing Lights of Eons",
            resSKill_p: "Dash forward and perform consecutive strikes that inflict Spectro DMG.",
            resSkill_dt1: "Overflowing Radiance",
            resSkill_dd1: "After Jinhsi uses Basic Attack 4 or, while not in Incarnation, Intro Skill Loong's Halo, an alternative Resonance Skill Overflowing " +
                        "Radiance is available within 5s. Resonance Skill Overflowing Radiance inflicts Spectro DMG and sends Jinhsi into Incarnation. Can be cast in mid-air.",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/jinhsi-resLib.png',
            resLibName: "Purge of Light",
            resLib_p: "Unleash the power of invocation to deal Spectro DMG. Can be cast in mid-air.",
            resLib_dt1: "",
            resLib_dd1: "",
            resLib_dd2: "",

            resLib_dt2: "",
            resLib_dd3: "",

            resLib_dt3: "",
            resLib_dd4: "",

            resLib_dt4: "",
            resLib_dd5: "",

            resLib_dt5: "",
            resLib_dd6: "",
        },
        forteCircuit: {
            forteCircuitImage: 'assets/images/skill-icons/jinhsi-forteCircuit.png',
            forteCircuitName: "Luminal Synthesis",
            forteCircuit_p: "",
            forteCircuit_dt1: "Incarnation",
            forteCircuit_dd1: "While in Incarnation: - Alternative Basic Attack \"Incarnation - Basic Attack\" becomes available. " +
                        "Perform up to 4 consecutive strikes, dealing Spectro DMG considered as Resonance Skill DMG. The basic attack cycle of this will not be reset. " +
                        "Can be cast in mid-air. - Alternative Resonance Skill \"Crescent Divinity\" becomes available. Deal Spectro DMG. " +
                        "Can be cast in mid-air. - Alternative Heavy Attack \"Incarnation - Heavy Attack\" becomes available. Attack the target in mid-air at the cost of Stamina, " +
                        "dealing Spectro DMG. - Alternative Dodge \"Incarnation - Dodge\" is available while in mid-air. Can be cast multiple times at the cost of Stamina. - " +
                        "Alternative Dodge Counter \"Incarnation - Dodge Counter\" becomes available. Deal Spectro DMG. Can be cast in mid-air.",

            forteCircuit_dt2: "Resonance Skill - Illuminous Epiphany",
            forteCircuit_dd2: "After Stage 4 of Incarnation - Basic Attack, Incarnation terminates and Jinhsi gains Ordination Glow. " +
                        "Can be cast in mid-air. While Ordination Glow lasts: - Basic Attack is replaced with Heavy Attack \"Incarnation - Heavy Attack\". " +
                        "Attack the target in mid-air at the cost of Stamina, dealing Spectro DMG. - Resonance Skill is replaced with Resonance Skill \"Illuminous Epiphany\". " +
                        "Send out Solar Flare that detonates as Stella Glamor, dealing Spectro DMG after a short delay. Consume up to 50 Incandescence, " +
                        "with each point of Incandescence granting bonus DMG Multiplier percentage to Stella Glamor. Can be cast in mid-air. - " +
                        "After casting Resonance Skill Illuminous Epiphany, Jinhsi gains Unison. This can be triggered once every 25s.",

            forteCircuit_dt3: "Unison",
            forteCircuit_dd3: "While Jinhsi has Unison, switching to other Resonators will remove Jinhsi's Unison to trigger Jinhsi's Outro Skill " +
                        "and the incoming Resonator's Intro Skill. Unison will be consumed in priority in place of Concerto Energy when Concerto Energy is full.",

            forteCircuit_dt4: "Incandescence",
            forteCircuit_dd4: "Jinhsi can hold up to 50 Incandescence. When Jinhsi is in the party, all nearby Resonators in the party gain Eras in Unity. " +
                        "Eras in Unity provides 2 independent effects: Jinhsi gains 1 Incandescence anytime Resonators in the party inflict Attribute DMG. This effect may " +
                        "be triggered by damage of the same Attribute for up to 1 time(s) every 3s. Additionally, Jinhsi gains 2 Incandescence when Resonators in the party " +
                        "damage the enemy with Coordinated Attacks. This effect may be triggered by Coordinated Attacks of the same Attribute for up to 1 time(s) every 3s.",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/jinhsi-introSkill.png',
            introSkillName: "Loong's Halo",
            introSkillDetail: "Attack the target, dealing Spectro DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/jinhsi-outroSkill.png',
            outroSkillName: "Temporal Bender",
            outroSkillDetail: "Summoning the power homologous with the Sentinel, Jinhsi may now gain Incandescence via Eras in Unity from damage of the same Attribute more effectively, at 1 time(s) every 1s for 20s."
        }
    },
    taoqi: {
        name: "Taoqi",
        rarity: 4,
        element: "Havoc",
        theme: "#f94fb4",
        health: 8950,
        attack: 225,
        defense: 1564,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/taoqi-pile.png',
        elementImage: '/assets/images/element-icons/havoc-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/gold-dissolving-feather-icon.png',
        ascensionName1: "Gold-Dissolving Feather",
        ascensionImage2: 'assets/images/ascencion-icons/iris-icon.png',
        ascensionName2: "Iris",
        ascensionImage3: 'assets/images/ascencion-icons/ff-howler-core-icon.png',
        ascensionName3: "FF Howler Core",
        buildStats: {
            health: 15121,
            attack: 1165,
            defense: 4960,
            critrate: "47.0%",
            critDmg: "200.4%",
            eregen: "192.6%",
            resSkill: 0,
            basicAttack: 0,
            heavyAttack: 0,
            resLib: 0,
            glacio: 0,
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Broadblade", 
            weaponIconImage:'assets/images/weapon-icons/broadblade-icon.png',
            weaponName: "Discord",
            weaponImage: 'assets/images/weapon-image/discord.png',
            weaponDescription: "When Resonance Skill is cast, restores 16 Concerto Energy. This effect can be triggered 1 time(s) every 20s.",
            weaponAttribute1: "ATK 337.50",
            weaponAttribute2: "Energy Regen 51.84%"
        },
        echoElementImage: 'assets/images/element-icons/w-moonlit-icon.png',
        echoElementOutline: "2px solid white",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/bell-borne-geochelone.png',
            echoName: "Bell-Borne Geochelone"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/spearback.png',
            echoName1: "Spearback",
            echoImage2: 'assets/images/echo-images/carapace.png',
            echoName2: "Carapace"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/zig-zag.png',
            echoName1: "Zig Zag",
            echoImage2: 'assets/images/echo-images/cruisewing.png',
            echoName2: "Cruisewing"
        },
        echoAttribute: {
            echoAttribute1: "Energy Regen + 10%.",
            echoAttribute2: "Upon using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s."
        },
        echoAbilityIcon: 'assets/images/echo-images/geochelone-icon.png',
        echoAbilityDescription: "Activate the protection of Bell-Borne Geochelone. Deal Glacio DMG based on 145.92% of the current " +
                    "character's DEF to nearby enemies, and obtain a Bell-Borne Shield that lasts for 15s The Bell-Borne Shield provides " +
                    "50.00% DMG Reduction and 10.00% DMG Boost for the current team members, and disappears after the current character is hit for 3 times. CD: 20s",
        normalAttack: {
            normalAttackImage: 'assets/images/skill-icons/basic-attack.png',
            normalAttackName: "Concealed Edge",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Perform up to 4 consecutive attacks, dealing Havoc DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Consume Stamina to deal Havoc DMG. Hold Basic Attack to enter Rocksteady Defense.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Consume Stamina to perform a Plunging Attack while in mid-air, dealing Havoc DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Havoc DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/taoqi-resSkill.png',
            resSKillName: "Fortified Defense",
            resSKill_p: "Taoqi deals Havoc DMG to surrounding targets, generating 3 Rocksteady Shield and healing herself. " +
                        "If attacked when casting Fortified Defense, Strategic Parry will be automatically cast.",
            resSkill_dt1: "Rocksteady Shield",
            resSkill_dd1: "When the active character on the team is attacked, 1 Rocksteady Shield is consumed to reduce the damage taken.",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/taoqi-resLib.png',
            resLibName: "Unmoveable",
            resLib_p: "Launch an attack based on Taoqi's DEF to the target, dealing Havoc DMG.",
            resLib_dt1: "",
            resLib_dd1: "",
            resLib_dd2: "",

            resLib_dt2: "",
            resLib_dd3: "",

            resLib_dt3: "",
            resLib_dd4: "",

            resLib_dt4: "",
            resLib_dd5: "",

            resLib_dt5: "",
            resLib_dd6: "",
        },
        forteCircuit: {
            forteCircuitImage: 'assets/images/skill-icons/taoqi-forteCircuit.png',
            forteCircuitName: "Power Shift",
            forteCircuit_p: "",
            forteCircuit_dt1: "Timed Counters",
            forteCircuit_dd1: "When carrying \"Resolving Caliber\", use Basic Attack after Heavy Attack Strategic Parry or " +
                        "Intro Skill Defense Formation to cast Timed Counters, performing up to 3 consecutive attacks, dealing Havoc DMG, " +
                        "considered as Basic Attack DMG. Timed Counters consume 1 \"Resolving Caliber\" upon hitting an enemy to grant a shield. " +
                        "After casting the Intro Skill Defense Formation, use Basic Attack to directly cast Timed Counters.", 

            forteCircuit_dt2: "Resolving Caliber",
            forteCircuit_dd2: "Taoqi can hold up to 3 Resolving Caliber. Basic Attack 4 will consume all of Taoqi's \"Rocksteady Shields\" to " +
                        "grant that many \"Resolving Caliber\". While Rocksteady Shield exists, when the active character is attacked, 1 \"Rocksteady Shield\" " +
                        "will be consumed to recover \"Resolving Caliber\". After Rocksteady Shield ends, all remaining \"Rocksteady Shield\" will be consumed to " +
                        "grant that many \"Resolving Caliber\".",

            forteCircuit_dt3: "",
            forteCircuit_dd3: "",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/taoqi-introSkill.png',
            introSkillName: "Defense Formation",
            introSkillDetail: "Attack the target, dealing Havoc DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/taoqi-outroSkill.png',
            outroSkillName: "Iron Will",
            outroSkillDetail: "The incoming Resonator has their Resonance Skill DMG Amplified by 38% for 14s or until they are switched out."
        }
    }
};

function showCharacterList() {
    document.getElementById('statsDisplay').style.display = 'none';
    document.getElementById('character-table').style.display = 'block';
}

