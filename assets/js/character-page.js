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
            echoImage1: 'assets/images/echo-images/sabyr-boar.png',
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
    },
    sanhua: {
        name: "Sanhua",
        rarity: 4,
        element: "Glacio",
        health: 10062,
        attack: 275,
        defense: 941,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/sanhua-pile.png',
        elementImage: '/assets/images/element-icons/glacio-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/sound-keeping-tacet-core-icon.png',
        ascensionName1: "Sound-Keeping Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/wintry-bell-icon.png',
        ascensionName2: "Wintry Bell",
        ascensionImage3: 'assets/images/ascencion-icons/ff-whisperin-core-icon.png',
        ascensionName3: "FF Whisperin Core",
        buildStats: {
            health: 12342,
            attack: 2364,
            defense: 941,
            critrate: "71.3%",
            critDmg: "278.0%",
            eregen: "120%",
            resSkill: "18.8%",
            basicAttack: 0,
            heavyAttack: 0,
            resLib: "9.0%",
            glacio: "70.0%",
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Sword", 
            weaponIconImage:'assets/images/weapon-icons/sword-icon.png',
            weaponName: "Emerald of Genesis",
            weaponImage: 'assets/images/weapon-image/emerald-of-genesis.png',
            weaponDescription: "Increases Energy Regen by 25.6%. When Resonance Skill is cast, increases ATK by 12%, stacking up to 2 time(s). This effect lasts for 10s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. Rate 25.30%"
        },
        echoElementImage: 'assets/images/element-icons/w-glacio-icon.png',
        echoElementOutline: "2px solid #42b3ff",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/lampylumen-myriad.png',
            echoName: "Lampylumen Myriad"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/tambourinist.png',
            echoName1: "Tambourinist",
            echoImage2: 'assets/images/echo-images/roseshroom.png',
            echoName2: "Roseshroom"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/glacio-dreadmane.png',
            echoName1: "Glacio Dreadmane",
            echoImage2: 'assets/images/echo-images/glacio-prism.png',
            echoName2: "Glacio Prism"
        },
        echoAttribute: {
            echoAttribute1: "Glacio DMG + 10%.",
            echoAttribute2: "Glacio DMG + 10% after releasing Basic Attack or Heavy Attack. This effect stacks up to 3 times, each stack lasts 15s"
        },
        echoAbilityIcon: 'assets/images/echo-images/myriad-icon.png',
        echoAbilityDescription: "Transform into Lampylumen Myriad. Perform up to 3 consecutive attacks. " +
                    "Unleash a freezing shock by performing consecutive forward strikes, with the initial two strikes inflicting " +
                    "200.16% and 200.16% Glacio DMG respectively, and the final strike dealing 266.88% Glacio DMG. Enemies will be frozen on hit. " +
                    "Each shock increases the current character's Glacio DMG by 4.00% and Resonance Skill DMG dealt by 4.00% for 15s, stacking up to 3 times CD: 20s",
        normalAttack: {
            normalAttackName: "Frigid Light",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Sanhua performs up to 5 consecutive attacks, dealing Glacio DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Sanhua consumes STA to launch attacks, dealing Glacio DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Sanhua consumes STA to perform a Mid-Air Plunging Attack, dealing Glacio DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Glacio DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/sanhua-resSkill.png',
            resSKillName: "Eternal Frost",
            resSKill_p: "Sanhua sends an air blade to create 1 \"Ice Prism\" on the ground, dealing Glacio DMG.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/sanhua-resLib.png',
            resLibName: "Glacial Gaze",
            resLib_p: "Sanhua deals Glacio DMG and creates 1 \"Glacier\".",
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
            forteCircuitImage: 'assets/images/skill-icons/sanhua-forteCircuit.png',
            forteCircuitName: "Clarity of Mind",
            forteCircuit_p: "",
            forteCircuit_dt1: "Heavy Attack: Detonate",
            forteCircuit_dd1: "When holding Basic Attack, a cursor moves back and forth on the Forte Gauge. " +
                        "Release Basic Attack while cursor falls in the \"Frostbite\" area, to perform Heavy Attack Detonate, " +
                        "dealing Glacio DMG considered as Heavy Attack DMG",

            forteCircuit_dt2: "Ice Burst",
            forteCircuit_dd2: "Sanhua's Heavy Attack Detonate detonates all \"Ice Thorns\", \"Ice Prisms\" and " +
                        "\"Glaciers\" within her attack range, dealing Glacio DMG. Ice Burst deals Resonance Skill DMG.",

            forteCircuit_dt3: "Frostbite Burst",
            forteCircuit_dd3: "The \"Frostbite\" area expands with every 1 stack of \"Clarity\". \"Clarity\" stacks up to 2 times. " +
                        "Sanhua obtains 1 stack of \"Clarity\" upon performing Basic Attack 5. Sanhua obtains 1 stack of \"Clarity\" upon casting Intro Skill Freezing Thorns. " +
                        "Sanhua obtains 1 stack of \"Clarity\" upon casting Resonance Skill Eternal Frost. Sanhua obtains 2 stack(s) of \"Clarity\" upon casting Resonance Liberation Glacial Gaze. " +
                        "Upon casting Heavy Attack Detonate, all \"Clarity\" is removed.",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/sanhua-introSkill.png',
            introSkillName: "Freezing Thorns",
            introSkillDetail: "Sanhua swings her blade downward and creates 1 \"Ice Thorn\", dealing Glacio DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/sanhua-outroSkill.png',
            outroSkillName: "Silversnow",
            outroSkillDetail: "The incoming Resonator has their Basic Attack DMG Amplified by 38% for 14s or until they are switched out."
        }
    },
    changli: {
        name: "Changli",
        rarity: 5,
        element: "Fusion",
        health: 10387,
        attack: 462,
        defense: 1099,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/changli-pile.png',
        elementImage: '/assets/images/element-icons/fusion-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/rage-tacet-core-icon.png',
        ascensionName1: "Rage Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/pavo-plum-icon.png',
        ascensionName2: "Pavo Plum",
        ascensionImage3: 'assets/images/ascencion-icons/tailored-ring-icon.png',
        ascensionName3: "Tailored Ring",
        buildStats: {
            health: 14947,
            attack: 2249,
            defense: 1099,
            critrate: "69.0%",
            critDmg: "282.6%",
            eregen: "100%",
            resSkill: "47.0%",
            basicAttack: 0,
            heavyAttack: 0,
            resLib: "45.0%",
            glacio: 0,
            fusion: "70.0%",
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Sword", 
            weaponIconImage:'assets/images/weapon-icons/sword-icon.png',
            weaponName: "Blazing Brillance",
            weaponImage: 'assets/images/weapon-image/blazing-brillance.png',
            weaponDescription: "ATK increased by 24%. The wielder gains 1 stack of Searing Feather upon dealing damage, " +
                        "which can be triggered once every 0.5s, and gains 5 stacks of the same effect upon casting Resonance Skill. " +
                        "Each stack of Searing Feather gives 8% additional Resonance Skill DMG Bonus for up to 14 stacks. After reaching the max stacks, " +
                        "all stacks will be removed in 12s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. DMG 48.60%"
        },
        echoElementImage: 'assets/images/element-icons/w-fusion-icon.png',
        echoElementOutline: "2px solid #f6764f",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/inferno-rider.png',
            echoName: "Inferno Rider"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/havoc-dreadmane.png',
            echoName1: "Havoc Dreadmane",
            echoImage2: 'assets/images/echo-images/viridblaze-saurian.png',
            echoName2: "Viridblaze Saurian"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/fusion-prism.png',
            echoName1: "Fusion Prism",
            echoImage2: 'assets/images/echo-images/lava-larva.png',
            echoName2: "Lava Larva"
        },
        echoAttribute: {
            echoAttribute1: "Fusion DMG + 10%.",
            echoAttribute2: "Fusion DMG + 30% for 15s after releasing Resonance Skill."
        },
        echoAbilityIcon: 'assets/images/echo-images/rider-icon.png',
        echoAbilityDescription: "Transform into the Inferno Rider to launch up to 3 consecutive slashes in a row, " +
                    "each slash dealing 242.40%, 282.80%, and 282.80% Fusion DMG respectively. After the final hit, " +
                    "increase the current Resonator's Fusion DMG by 12.00% and Basic Attack DMG by 12.00% for 15s. " +
                    "Long press the Echo Skill to transform into the Inferno Rider and enter Riding Mode. When exiting Riding Mode, " +
                    "deal 282.80% Fusion DMG to enemies in front. CD: 20s",
        normalAttack: {
            normalAttackName: "Blazing Enlightment",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Perform up to 4 consecutive attacks, dealing Fusion DMG. After releasing Basic Attack 4, enter True Sight, lasting for 12s.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Consume Stamina to perform up to 4 consecutive attacks in mid-air, dealing Fusion DMG. After releasing Mid-air Attack 4, enter True Sight, lasting for 12s.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Hold Basic Attack on the ground to perform an upward strike at the cost of Stamina, dealing Fusion DMG. Use Basic Attack within a certain time to release Mid-Air Attack 3.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/changli-resSkill.png',
            resSKillName: "Tripartite Flames",
            resSKill_p: "",
            resSkill_dt1: "True Sight: Capture",
            resSkill_dd1: "After releasing Resonance Skill, Changli dashes towards the enemy and enters True Sight, lasting for 12s. " +
                        "In the end, she releases a plunging attack, dealing Fusion DMG. True Sight: Capture has 2 initial charges and holds up to 2 charges in maximum. " +
                        "The number of charges is replenished by 1 every 12s. Can be cast in mid-air.",

            resSkill_dt2: "Basic Attack: True Sight - Conquest",
            resSkill_dd2: "When in True Sight, if Changli uses Ground Basic Attack, she releases True Sight: " +
                        "Conquest, dashing towards the enemy and dealing Fusion DMG, considered as Resonance Skill DMG. After releasing True Sight: Conquest, True Sight ends.",

            resSkill_dt3: "Basic Attack: True Sight - Charge",
            resSkill_dd3: "When in True Sight, if Changli jumps or uses Basic Attack in mid-air, she releases True Sight: Charge, dashing towards the enemy and dealing Fusion DMG, " +
                        "considered as Resonance Skill DMG. After releasing True Sight: Charge, True Sight ends."
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/changli-resLib.png',
            resLibName: "Radiance of Fealty",
            resLib_p: "Deal Fusion DMG to nearby targets, obtaining 4 stacks of Enflamement, and entering Fiery Feather. Can be cast in mid-air.",
            resLib_dt1: "Fiery Feather",
            resLib_dd1: "When Changli releases Heavy Attack Flaming Sacrifice within 10s, her ATK is increased by 25%, after which Fiery Feather ends.",
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
            forteCircuit_dt1: "Heavy Attack: Flaming Sacrifice",
            forteCircuit_dd1: "When releasing Heavy Attack, if Changli carries 4 stacks of Enflamement, she consumes all stacks " +
                        "of Enflamement to cast Flaming Sacrifice, dealing Fusion DMG, considered as Resonance Skill DMG. While casting Flaming Sacrifice, Changli takes 40% less DMG.",

            forteCircuit_dt2: "Enflamement",
            forteCircuit_dd2: "Changli can hold up to 4 stacks of Enflamement. Changli obtains 1 stack of Enflamement for every Basic Attack: " +
                        "True Sight - Conquest on hit. Changli obtains 1 stack of Enflamement for every Basic Attack: True Sight - Charge on hit. " +
                        "Changli obtains 4 stacks of Enflamement for every Resonance Liberation Radiance of Fealty.",

            forteCircuit_dt3: "",
            forteCircuit_dd3: "",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/changli-introSkill.png',
            introSkillName: "Obedience of Rules",
            introSkillDetail: "Changli appears in mid-air, attacks the target, and enters True Sight, lasting for 12s."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/changli-outroSkill.png',
            outroSkillName: "Strategy of Duality",
            outroSkillDetail: "The incoming Resonator has their Fusion DMG Amplified by 20% and Resonance Liberation DMG Amplified by 25% for 10s or until the Resonator is switched out."
        }
    },
    yangyang: {
        name: "Yangyang",
        rarity: 4,
        element: "Aero",
        health: 10200,
        attack: 250,
        defense: 1099,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/yangyan-pile.png',
        elementImage: '/assets/images/element-icons/aero-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/roaring-rock-fist-icon.png',
        ascensionName1: "Roaring Rock Fist",
        ascensionImage2: 'assets/images/ascencion-icons/wintry-bell-icon.png',
        ascensionName2: "Wintry Bell",
        ascensionImage3: 'assets/images/ascencion-icons/tailored-ring-icon.png',
        ascensionName3: "Tailored Ring",
        buildStats: {
            health: 14760,
            attack: 2015,
            defense: 1099,
            critrate: "71.3%",
            critDmg: "278.0%",
            eregen: "140%",
            resSkill: 0,
            basicAttack: "36.0%",
            heavyAttack: 0,
            resLib: 0,
            glacio: 0,
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: "60.0%",
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Sword", 
            weaponIconImage:'assets/images/weapon-icons/sword-icon.png',
            weaponName: "Emerald Of Genesis",
            weaponImage: 'assets/images/weapon-image/emerald-of-genesis.png',
            weaponDescription: "Increases Energy Regen by 25.6%. When Resonance Skill is cast, increases ATK by 12%, stacking up to 2 time(s). This effect lasts for 10s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. Rate 25.30%"
        },
        echoElementImage: 'assets/images/element-icons/w-aero-icon.png',
        echoElementOutline: "2px solid #55ffb5",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/impermanence-heron.png',
            echoName: "Impermanence Heron"
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
            echoImage2: 'assets/images/echo-images/diamondclaw.png',
            echoName2: "DiamondClaw"
        },
        echoAttribute: {
            echoAttribute1: "Energy Regen + 10%.",
            echoAttribute2: "Upon using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s."
        },
        echoAbilityIcon: 'assets/images/echo-images/heron-icon.png',
        echoAbilityDescription: "Transform into Impermanence Heron to fly up and smack down, dealing 310.56% Havoc DMG. Long press to stay as " +
                    "Impermanence Heron and continuously spit flames, each attack dealing 55.73% Havoc DMG. Once the initial attack lands on any enemy, " +
                    "the current character regains 10 Resonance Energy. If the current character uses their Outro Skill within the next 15s, the next character's " +
                    "damage dealt will be boosted by 12% for 15s. CD: 20s",
        normalAttack: {
            normalAttackName: "Feather as Blade",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Yangayang performs up to 4 consecutive attacks, dealing Aero DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Yangyang consumes STA to lunge forward, dealing Aero DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Yangyang consumes STA to perform a Plunging Attack from mid-air, dealing Aero DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to thrust forward, dealing Aero DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/yangyang-resSkill.png',
            resSKillName: "Zephyr Domain",
            resSKill_p: "Yangyang wields her sword to create a whirling vortex of winds that pulls nearby enemies to the center, dealing Aero DMG.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/yangyang-resLib.png',
            resLibName: "Wind Spiral",
            resLib_p: "Yangyang conjures a mighty Cyclone that pulls nearby enemies, dealing Aero DMG.",
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
            forteCircuitImage: 'assets/images/skill-icons/yangyang-forteCircuit.png',
            forteCircuitName: "Echoing Feathers",
            forteCircuit_p: "",
            forteCircuit_dt1: "Heavy Attack: Stormy Strike",
            forteCircuit_dd1: "When Yangyang has 3 Melodies, she can cast Stormy Strike after Heavy Attack or Dodge Counter, dealing Aero DMG.",

            forteCircuit_dt2: "Mid-air Attack: Feather Release",
            forteCircuit_dd2: "When Yangyang has 3 Melodies, cast Basic Attack in mid-air to consume all Melodies and perform consecutive strikes, " +
                        "diving from mid-air, dealing Aero DMG. As Yangyang lands, she sheathes her sword with an attack, dealing Aero DMG, considered as Basic Attack DMG.",

            forteCircuit_dt3: "Melody",
            forteCircuit_dd3: "Yangyang can hold up to 3 Melodies Yangyang obtains 1 Melody with every Basic Attack 4 on hit. " +
                        "Yangyang obtains 1 Melody for every Heavy Attack Zephyr Song on hit. Yangyang obtains 1 Melody for every " +
                        "Resonance Skill Zephyr Domain on hit. Yangyang obtains 1 Melody upon casting Intro Skill Cerulean Song.",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/yangyang-introSkill.png',
            introSkillName: "Cerulean Song",
            introSkillDetail: "Yangyang sends the target into the air, dealing Aero DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/yangyang-outroSkill.png',
            outroSkillName: "Whispering Breeze",
            outroSkillDetail: "Restore 4 Resonance Energy per second for 5s for the incoming Resonator."
        }
    },
    rover_spectro: {
        name: "Rover(Spectro)",
        rarity: 5,
        element: "Spectro",
        health: 11400,
        attack: 375,
        defense: 1369,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/rover(spectro)-pile.png',
        elementImage: '/assets/images/element-icons/spectro-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/mysterious-code-icon.png',
        ascensionName1: "Mysterious Code",
        ascensionImage2: 'assets/images/ascencion-icons/pecok-flower-icon.png',
        ascensionName2: "Pecok Flower",
        ascensionImage3: 'assets/images/ascencion-icons/ff-whisperin-core-icon.png',
        ascensionName3: "FF Whisperin Code",
        buildStats: {
            health: 15960,
            attack: 2342,
            defense: 1368,
            critrate: "71.3%",
            critDmg: "278.0%",
            eregen: "120.5%",
            resSkill: 0,
            basicAttack: "27.0%",
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
            weaponType: "Sword", 
            weaponIconImage:'assets/images/weapon-icons/sword-icon.png',
            weaponName: "Emerald Of Genesis",
            weaponImage: 'assets/images/weapon-image/emerald-of-genesis.png',
            weaponDescription: "Increases Energy Regen by 25.6%. When Resonance Skill is cast, increases ATK by 12%, stacking up to 2 time(s). This effect lasts for 10s.",
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
            echoImage2: 'assets/images/echo-images/autopuppet-scout.png',
            echoName2: "Autopuppet Scout"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/gulpuff.png',
            echoName1: "Gulpuff",
            echoImage2: 'assets/images/echo-images/hoartoise.png',
            echoName2: "Hoartoise"
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
            normalAttackName: "Vibration Manifestation",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Rover performs up to 4 consecutive attacks, dealing Spectro DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Rover consumes STA to attack the target, dealing Spectro DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Rover consumes STA to perform a Mid-Air Plunging Attack, dealing Spectro DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Spectro DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/rover_spectro-resSkill.png',
            resSKillName: "Resonating Slashes",
            resSKill_p: "Rover launches an attack forward, dealing Spectro DMG.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/rover_spectro-resLib.png',
            resLibName: "Echoing Orchestra",
            resLib_p: "Rover converges Spectro energy to assail the target area, detonating it after a short delay and dealing Spectro DMG.",
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
            forteCircuitImage: 'assets/images/skill-icons/rover_spectro-forteCircuit.png',
            forteCircuitName: "World in a Grain of Sand",
            forteCircuit_p: "",
            forteCircuit_dt1: "Resonance Skill: Resonating Spin",
            forteCircuit_dd1: "If \"Diminutive Sound\" exceeds 50 when Resonance Skill is used, Rover consumes 50 \"Diminutive Sound\" " +
                        "to cast Resonating Spin, dealing Spectro DMG, considered as Resonance Skill DMG.",

            forteCircuit_dt2: "Basic Attack: Resonating Echoes",
            forteCircuit_dd2: "After Resonance Skill Resonating Spin ends, Rover performs Resonating Echoes upon using Basic Attack button. " +
                        "Launch attacks forward, dealing Spectro DMG, considered as Resonance Skill DMG.",

            forteCircuit_dt3: "Diminutive Sound",
            forteCircuit_dd3: "Rover can hold up to 100 \"Diminutive Sounds\". Rover obtains \"Diminutive Sound\" for every Normal Attack Vibration Manifestation on hit. " +
                        "Rover obtains \"Diminutive Sound\" for every Heavy Attack Aftertune on hit. Rover obtains \"Diminutive Sound\" upon casting Intro Skill Waveshock.",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/rover_spectro-introSkill.png',
            introSkillName: "Waveshock",
            introSkillDetail: "Rover attacks the target, dealing Spectro DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/rover_spectro-outroSkill.png',
            outroSkillName: "Instant",
            outroSkillDetail: "Generate an area of stasis centered around the incoming Resonator, lasting for 3s."
        }
    },
    danjin: {
        name: "Danjin",
        rarity: 4,
        element: "Havoc",
        health: 9437,
        attack: 262,
        defense: 1148,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/danjin-pile.png',
        elementImage: '/assets/images/element-icons/havoc-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/strife-tacet-core-icon.png',
        ascensionName1: "Strife Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/belle-poppy-icon.png',
        ascensionName2: "Belle Poppy",
        ascensionImage3: 'assets/images/ascencion-icons/tailored-ring-icon.png',
        ascensionName3: "Tailored Ring",
        buildStats: {
            health: 13997,
            attack: 2137,
            defense: 1148,
            critrate: "71.3%",
            critDmg: "278.0%",
            eregen: "100.0%",
            resSkill: "47.0%",
            basicAttack: 0,
            heavyAttack: 0,
            resLib: 0,
            glacio: 0,
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: "70.0%",
            healing: 0
        },
        weapon: {
            weaponType: "Sword", 
            weaponIconImage:'assets/images/weapon-icons/sword-icon.png',
            weaponName: "Emerald Of Genesis",
            weaponImage: 'assets/images/weapon-image/emerald-of-genesis.png',
            weaponDescription: "Increases Energy Regen by 25.6%. When Resonance Skill is cast, increases ATK by 12%, stacking up to 2 time(s). This effect lasts for 10s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. Rate 25.30%"
        },
        echoElementImage: 'assets/images/element-icons/w-havoc-icon.png',
        echoElementOutline: "2px solid #d191b9",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/dreamless.png',
            echoName: "Dreamless"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/roseshroom.png',
            echoName1: "Roseshroom",
            echoImage2: 'assets/images/echo-images/tambourinist.png',
            echoName2: "Tambourinist"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/excarat.png',
            echoName1: "Excarat",
            echoImage2: 'assets/images/echo-images/chirpuff.png',
            echoName2: "Chirpuff"
        },
        echoAttribute: {
            echoAttribute1: "Havoc DMG + 10%.",
            echoAttribute2: "Havoc DMG + 7.5% after releasing Basic Attack or Heavy Attack. This effect stacks up to 4 times, each stack lasts 15s."
        },
        echoAbilityIcon: 'assets/images/echo-images/dreamless-icon.png',
        echoAbilityDescription: "Transform into Dreamless and perform 6 consecutive strikes. The first 5 strikes deal 54.08% Havoc DMG each, " +
                    "and the last strike deal 270.40% Havoc DMG. The DMG of this Echo Skill is increased by 50.00% during the first 5s after Rover: " +
                    "Havoc casts Resonance Liberation: Deadening Abyss. CD: 20s",
        normalAttack: {
            normalAttackName: "Execution",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Danjin performs up to 3 consecutive attacks, dealing Havoc DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Danjin consumes STA to launch consecutive attacks, dealing Havoc DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Consume STA to perform a Mid-air Plunging Attack, dealing Havoc DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to launch an attack, dealing Havoc DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/danjin-resSkill.png',
            resSKillName: "Crimson Fragment",
            resSKill_p: "When casting Crimson Fragment, each attack consumes 3% of Danjin's max HP. When Danjin's HP is less than 1%, this no longer consumes HP.",
            resSkill_dt1: "Carmine Gleam",
            resSkill_dd1: "Danjin attacks the target, dealing Havoc DMG.",

            resSkill_dt2: "Crimson Erosion",
            resSkill_dd2: "After Basic Attack 2, Dodge Counter or Intro Skill Vindication, use Resonance Skill " +
                        "to perform up to 2 consecutive strikes, dealing Havoc DMG. When Crimson Erosion 2 hits a target, apply Incinerating Will to it.",

            resSkill_dt3: "Sanguine Pulse",
            resSkill_dd3: "Use Resonance Skill after Basic Attack 3 to perform up to 3 consecutive attacks, dealing Havoc DMG."
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/danjin-resLib.png',
            resLibName: "Crimson Bloom",
            resLib_p: "Danjin's anger intensifies as she frantically swings her dual blades, performing multiple rapid consecutive attacks, " +
                        "and 1 Scarlet Burst attack(s), dealing Havoc DMG.",
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
            forteCircuitImage: 'assets/images/skill-icons/danjin-forteCircuit.png',
            forteCircuitName: "Serene Vigil",
            forteCircuit_p: "",
            forteCircuit_dt1: "Heavy Attack: Chaoscleave",
            forteCircuit_dd1: "After accumulating 60 \"Ruby Blossom\", long press Basic Attack to consume all \"Ruby Blossom\" to cast Chaoscleave, " +
                        "dealing Havoc DMG, considered as Heavy Attack DMG, and healing Danjin. If current \"Ruby Blossom\" reaches over 120, 120 \"Ruby Blossom\" " +
                        "is consumed instead to increase the DMG multiplier of Chaoscleave and Scatterbloom performed this time.",

            forteCircuit_dt2: "Heavy Attack: Scatterbloom",
            forteCircuit_dd2: "Use Basic Attack after Heavy Attack Chaoscleave to cast Scatterbloom to attack the target, dealing Havoc DMG, considered as Heavy Attack DMG.",

            forteCircuit_dt3: "Ruby Blossom",
            forteCircuit_dd3: "Danjin can hold up to 120 Ruby Blossom. Danjin obtains \"Ruby Blossom\" when using Resonance Skill Crimson Fragment.",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/danjin-introSkill.png',
            introSkillName: "Vindication",
            introSkillDetail: "With unwavering determination, Danjin unleashes a strike, dealing Havoc DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/danjin-outroSkill.png',
            outroSkillName: "Duality",
            outroSkillDetail: "The incoming Resonator has their Havoc DMG Amplified by 23% for 14s or until they are switched out."
        }
    },
    rover_havoc: {
        name: "Rover(Havoc)",
        rarity: 5,
        element: "Havoc",
        health: 10825,
        attack: 412,
        defense: 1258,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/rover(havoc)-pile.png',
        elementImage: '/assets/images/element-icons/havoc-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/mysterious-code-icon.png',
        ascensionName1: "Mysterious Code",
        ascensionImage2: 'assets/images/ascencion-icons/pecok-flower-icon.png',
        ascensionName2: "Pecok Flower",
        ascensionImage3: 'assets/images/ascencion-icons/ff-whisperin-core-icon.png',
        ascensionName3: "FF Whisperin Core",
        buildStats: {
            health: 15385,
            attack: 2258,
            defense: 1258,
            critrate: "69.0%",
            critDmg: "278.6%",
            eregen: "120.5%",
            resSkill: "28.2%",
            basicAttack: 0,
            heavyAttack: 0,
            resLib: "27.0%",
            glacio: 0,
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: "70.0%",
            healing: 0
        },
        weapon: {
            weaponType: "Sword", 
            weaponIconImage:'assets/images/weapon-icons/sword-icon.png',
            weaponName: "Blazing Brillance",
            weaponImage: 'assets/images/weapon-image/blazing-brillance.png',
            weaponDescription: "ATK increased by 24%. The wielder gains 1 stack of Searing Feather upon dealing damage, " +
                        "which can be triggered once every 0.5s, and gains 5 stacks of the same effect upon casting Resonance Skill. " +
                        "Each stack of Searing Feather gives 8% additional Resonance Skill DMG Bonus for up to 14 stacks. After reaching the max stacks, " +
                        "all stacks will be removed in 12s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. DMG 48.60%"
        },
        echoElementImage: 'assets/images/element-icons/w-havoc-icon.png',
        echoElementOutline: "2px solid #d191b9",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/dreamless.png',
            echoName: "Dreamless"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/roseshroom.png',
            echoName1: "Roseshroom",
            echoImage2: 'assets/images/echo-images/tambourinist.png',
            echoName2: "Tambourinist"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/excarat.png',
            echoName1: "Excarat",
            echoImage2: 'assets/images/echo-images/havoc-warrior.png',
            echoName2: "Havoc Warrior"
        },
        echoAttribute: {
            echoAttribute1: "Havoc DMG + 10%.",
            echoAttribute2: "Havoc DMG + 7.5% after releasing Basic Attack or Heavy Attack. This effect stacks up to 4 times, each stack lasts 15s."
        },
        echoAbilityIcon: 'assets/images/echo-images/dreamless-icon.png',
        echoAbilityDescription: "Transform into Dreamless and perform 6 consecutive strikes. The first 5 strikes deal 54.08% Havoc DMG each, " +
                    "and the last strike deal 270.40% Havoc DMG. The DMG of this Echo Skill is increased by 50.00% during the first 5s after Rover: " +
                    "Havoc casts Resonance Liberation: Deadening Abyss. CD: 20s",
        normalAttack: {
            normalAttackName: "Tuneslayer",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Rover-Havoc performs up to 5 consecutive attacks, dealing Havoc DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Rover-Havoc consumes STA to attack, dealing Havoc DMG. Use Basic Attack after casting Heavy Attack to cast Basic Attack 4.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Rover-Havoc consumes STA to cast a Mid-Air Plunging Attack, dealing Havoc DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Havoc DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/rover_havoc-resSkill.png',
            resSKillName: "Wingblade",
            resSKill_p: "Transform sound into feathers, dealing Havoc DMG.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",
            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/rover_havoc-resLib.png',
            resLibName: "Deadening Abyss",
            resLib_p: "Rover gathers resonating sounds to attack a target, dealing Havoc DMG.",
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
            forteCircuitImage: 'assets/images/skill-icons/rover_havoc-forteCircuit.png',
            forteCircuitName: "Umbra Eclipse",
            forteCircuit_p: "",
            forteCircuit_dt1: "Devastation",
            forteCircuit_dd1: "When \"Umbra\" is full, hold Basic Attack to cast Devastation to attack the target, dealing Havoc DMG, considered as Heavy Attack DMG.",

            forteCircuit_dt2: "Dark Surge",
            forteCircuit_dd2: "After casting Devastation, Rover enters the Dark Surge state. In this state: " +
                        "Basic Attack is replaced with Enhanced Basic Attack, which performs up to 5 consecutive attacks, " +
                        "dealing Havoc DMG. Heavy Attack is replaced with Enhanced Heavy Attack; Use Basic Attack after " +
                        "casting Enhanced Heavy Attack to cast Heavy Attack Thwackblade to attack the target, dealing Havoc DMG, " +
                        "considered as Heavy Attack DMG. Use Basic Attack after casting Heavy Attack Thwackblade to cast Enhanced " +
                        "Basic Attack 3 to attack the target, dealing Havoc DMG; Resonance Skill Wingblade is replaced with Resonance " +
                        "Skill Lifetaker, transforming sounds into blades to attack the target, dealing Havoc DMG.",

            forteCircuit_dt3: "Umbra",
            forteCircuit_dd3: "Rover can hold up to 100 points of Umbra. Normal Attack Tuneslayer recovers Umbra on hit. " +
                        "Resonance Skill Wingblade recovers Umbra when cast. Resonance Skill Lifetaker recovers Umbra when cast. " +
                        "Intro Skill Instant of Annihilation recovers Umbra when cast.",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/rover_havoc-introSkill.png',
            introSkillName: "Instant of Annihilation",
            introSkillDetail: "Attack the target, dealing Havoc DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/rover_havoc-outroSkill.png',
            outroSkillName: "Soundweaver",
            outroSkillDetail: "Rover summons a Havoc Field, dealing Havoc DMG of 143.3% of Rover's ATK to all targets within the range every 2s for 6s."
        }
    },
    chixia: {
        name: "Chixia",
        rarity: 4,
        element: "Fusion",
        health: 9087,
        attack: 300,
        defense: 953,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/chixia-pile.png',
        elementImage: '/assets/images/element-icons/fusion-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/rage-tacet-core-icon.png',
        ascensionName1: "Rage Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/belle-poppy-icon.png',
        ascensionName2: "Belle Poppy",
        ascensionImage3: 'assets/images/ascencion-icons/ff-whisperin-core-icon.png',
        ascensionName3: "FF Whisperin Core",
        buildStats: {
            health: 13645,
            attack: 2206,
            defense: 953,
            critrate: "71.3%",
            critDmg: "278.0%",
            eregen: "130.8%",
            resSkill: "9.2%",
            basicAttack: 0,
            heavyAttack: 0,
            resLib: "9.0%",
            glacio: 0,
            fusion: "70.0%",
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Pistols", 
            weaponIconImage:'assets/images/weapon-icons/pistols-icon.png',
            weaponName: "Static Mist",
            weaponImage: 'assets/images/weapon-image/static-mist.png',
            weaponDescription: "Increases Energy Regen by 25.6%. When Outro Skill is cast, increases the incoming Resonator's ATK by 20%, stacking up to 1 time(s). This effect lasts for 14s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. Rate 24.30%"
        },
        echoElementImage: 'assets/images/element-icons/w-fusion-icon.png',
        echoElementOutline: "2px solid #f6764f",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/inferno-rider.png',
            echoName: "Inferno Rider"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/havoc-dreadmane.png',
            echoName1: "Havoc Dreadmane",
            echoImage2: 'assets/images/echo-images/viridblaze-saurian.png',
            echoName2: "Viridblaze Saurian"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/fusion-prism.png',
            echoName1: "Fusion Prism",
            echoImage2: 'assets/images/echo-images/snip-snap.png',
            echoName2: "Snip Snap"
        },
        echoAttribute: {
            echoAttribute1: "Fusion DMG + 10%.",
            echoAttribute2: " Fusion DMG + 30% for 15s after releasing Resonance Skill."
        },
        echoAbilityIcon: 'assets/images/echo-images/rider-icon.png',
        echoAbilityDescription: "Transform into the Inferno Rider to launch up to 3 consecutive slashes in a row, " +
                    "each slash dealing 242.40%, 282.80%, and 282.80% Fusion DMG respectively. After the final hit, " +
                    "increase the current Resonator's Fusion DMG by 12.00% and Basic Attack DMG by 12.00% for 15s. " +
                    "Long press the Echo Skill to transform into the Inferno Rider and enter Riding Mode. When exiting Riding Mode, deal 282.80% Fusion DMG to enemies in front. CD: 20s",
        normalAttack: {
            normalAttackName: "POW POW",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Chixia fires up to 4 consecutive shots, dealing Fusion DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Chixia enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Chixia consumes STA to perform consecutive shots at the target in mid-air, dealing Fusion DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/chixia-resSkill.png',
            resSKillName: "Whizzing Fight Spirit",
            resSKill_p: "Chixia unleashes a flurry of shots, dealing Fusion DMG.",
            resSkill_dt1: "",
            resSkill_dd1: "Whizzing Fight Spirit has 2 initial charges.",

            resSkill_dt2: "",
            resSkill_dd2: "",
            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/chixia-resLib.png',
            resLibName: "Blazing Flames",
            resLib_p: "Chixia fires up fast shots at nearby enemies, dealing Fusion DMG.",
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
            forteCircuitImage: 'assets/images/skill-icons/chixia-forteCircuit.png',
            forteCircuitName: "Heroic Bullets",
            forteCircuit_p: "",
            forteCircuit_dt1: "Resonance Skill: DAKA DAKA!",
            forteCircuit_dd1: "Hold Resonance Skill Whizzing Fight Spirit to enter DAKA DAKA!. In this state: " +
                        "- Chixia continuously consumes \"Thermobaric Bullets\" to attack the target, dealing Fusion DMG, " +
                        "considered as Resonance Skill DMG. - Tap Basic Attack to cast Basic Attack 4, dealing Fusion DMG, " +
                        "considered as Basic Attack DMG. Then she exits the \"DAKA DAKA!\" state. - If 30 \"Thermobaric Bullets\" " +
                        "have been fired when Basic Attack is activated, Chixia will cast Resonance Skill Boom Boom and exit \"DAKA DAKA!\" state. " +
                        "- Chixia exits the \"DAKA DAKA!\" state when all \"Thermobaric Bullets\" are consumed.",

            forteCircuit_dt2: "Resonance Skill: Boom Boom",
            forteCircuit_dd2: "Deal Fusion DMG, considered as Resonance Skill DMG.",

            forteCircuit_dt3: "Thermobaric Bullets",
            forteCircuit_dd3: "Chixia can hold up to 60 \"Thermobaric Bullets\". Inherent Skill Scorching Magazine increases Max \"Thermobaric Bullets\" by 10. " +
                        "Chixia obtains \"Thermobaric Bullets\" for every Normal Attack POW POW on hit. Chixia obtains \"Thermobaric Bullets\" upon casting Intro Skill Grand " +
                        "Entrance and Resonance Skill Whizzing Fight Spirit.",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/chixia-introSkill.png',
            introSkillName: "Grand Entrance",
            introSkillDetail: "Chixia makes a heroic entrance and fires rapidly with her dual pistols at the target, dealing Fusion DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/chixia-outroSkill.png',
            outroSkillName: "Leaping Flames",
            outroSkillDetail: "Chixia releases a shock wave surrounding the target, dealing Fusion DMG equal to 530.00% of Chixia's ATK to enemies within the range."
        }
    },
    mortefi: {
        name: "Mortefi",
        rarity: 4,
        element: "Fusion",
        health: 10025,
        attack: 250,
        defense: 1136,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/mortefi-pile.png',
        elementImage: '/assets/images/element-icons/fusion-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/rage-tacet-core-icon.png',
        ascensionName1: "Rage Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/coriolus-icon.png',
        ascensionName2: "Coriolus",
        ascensionImage3: 'assets/images/ascencion-icons/ff-whisperin-core-icon.png',
        ascensionName3: "FF Whisperin Core",
        buildStats: {
            health: 14585,
            attack: 1865,
            defense: 1136,
            critrate: "71.3%",
            critDmg: "278.0%",
            eregen: "161.3%",
            resSkill: "28.2%",
            basicAttack: 0,
            heavyAttack: 0,
            resLib: "18.05",
            glacio: 0,
            fusion: "60.0%",
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Pistols", 
            weaponIconImage:'assets/images/weapon-icons/pistols-icon.png',
            weaponName: "Static Mist",
            weaponImage: 'assets/images/weapon-image/static-mist.png',
            weaponDescription: "Increases Energy Regen by 25.6%. When Outro Skill is cast, increases the incoming Resonator's ATK by 20%, stacking up to 1 time(s). This effect lasts for 14s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. Rate 24.30%"
        },
        echoElementImage: 'assets/images/element-icons/w-moonlit-icon.png',
        echoElementOutline: "2px solid white",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/impermanence-heron.png',
            echoName: "Impermanence Heron"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/spearback.png',
            echoName1: "Spearback",
            echoImage2: 'assets/images/echo-images/carapace.png',
            echoName2: "Carapace"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/cruisewing.png',
            echoName1: "Cruisewing",
            echoImage2: 'assets/images/echo-images/diamondclaw.png',
            echoName2: "Diamondclaw"
        },
        echoAttribute: {
            echoAttribute1: " Energy Regen + 10%",
            echoAttribute2: "Upon using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s."
        },
        echoAbilityIcon: 'assets/images/echo-images/heron-icon.png',
        echoAbilityDescription: "Transform into Impermanence Heron to fly up and smack down, dealing 310.56% Havoc DMG. " +
                    "Long press to stay as Impermanence Heron and continuously spit flames, each attack dealing 55.73% Havoc DMG. " +
                    "Once the initial attack lands on any enemy, the current character regains 10 Resonance Energy. If the current " +
                    "character uses their Outro Skill within the next 15s, the next character's damage dealt will be boosted by 12% for 15s. CD: 20s",
        normalAttack: {
            normalAttackName: "Impromptu Show",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Mortefi uses his dual pistols and flames to perform up to 4 consecutive shots, dealing Fusion DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Mortefi enters the aiming state for a more powerful shot. The aimed shot fired after charging finishes deals Fusion DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Mortefi consumes STA to perform consecutive shots at the target in mid-air, dealing Fusion DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/mortefi-resSkill.png',
            resSKillName: "Passionate Variation",
            resSKill_p: "Launch a flashing lightning of flames forward, dealing Fusion DMG.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/mortefi-resLib.png',
            resLibName: "Violent Finale",
            resLib_p: "Deal Fusion DMG, and apply Burning Rhapsody to all characters on the team.",
            resLib_dt1: "Burning Rhapsody",
            resLib_dd1: "When the active character's Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato. " +
                        "When the active character's Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato. Mortefi can launch one Coordinated Attack every 0.35s.",
            resLib_dd2: "",

            resLib_dt2: "Marcato",
            resLib_dd3: "Deals Fusion DMG.",

            resLib_dt3: "",
            resLib_dd4: "",

            resLib_dt4: "",
            resLib_dd5: "",

            resLib_dt5: "",
            resLib_dd6: "",
        },
        forteCircuit: {
            forteCircuitImage: 'assets/images/skill-icons/mortefi-forteCircuit.png',
            forteCircuitName: "Fury Fugue",
            forteCircuit_p: "",
            forteCircuit_dt1: "Resonance Skill: Fury Fugue",
            forteCircuit_dd1: "When Mortefi's Annoyance reaches 100, his Resonance Skill is replaced with Fury Fugue. " +
                        "When casting Fury Fugue, Mortefi consumes all Annoyance to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill DMG.",

            forteCircuit_dt2: "Annoyance",
            forteCircuit_dd2: "Mortefi can hold up to 100 Annoyance and can restore Annoyance in the following ways: - " +
                        "When Normal Attack Impromptu Show hits the target - When Intro Skill Dissonance hits the target - " +
                        "When Resonance Skill Passionate Variation hits the target - Within 5s after casting Passionate Variation, " +
                        "Normal Attack Impromptu Show that hits the target restores Annoyance additionally.",

            forteCircuit_dt3: "",
            forteCircuit_dd3: "",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/mortefi-introSkill.png',
            introSkillName: "Dissonance",
            introSkillDetail: "Attack the target, dealing Fusion DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/mortefi-outroSkill.png',
            outroSkillName: "Rage Transposition",
            outroSkillDetail: "The incoming Resonator gains 38% Heavy Attack DMG Amplification for 14s or until they are switched out."
        }
    },
    aalto: {
        name: "Aalto",
        rarity: 4,
        element: "Aero",
        health: 9850,
        attack: 262,
        defense: 1075,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/aalto-pile.png',
        elementImage: '/assets/images/element-icons/aero-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/roaring-rock-fist-icon.png',
        ascensionName1: "Roaring Rock Fist",
        ascensionImage2: 'assets/images/ascencion-icons/wintry-bell-icon.png',
        ascensionName2: "Wintry Bell",
        ascensionImage3: 'assets/images/ascencion-icons/ff-howler-core-icon.png',
        ascensionName3: "FF Howler Core",
        buildStats: {
            health: 14410,
            attack: 2137,
            defense: 1075,
            critrate: "71.3%",
            critDmg: "278.0%",
            eregen: "161.3%",
            resSkill: 0,
            basicAttack: 0,
            heavyAttack: 0,
            resLib: 0,
            glacio: 0,
            fusion: 0,
            electro: 0,
            aero: "60.0%",
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Pistols", 
            weaponIconImage:'assets/images/weapon-icons/pistols-icon.png',
            weaponName: "Static Mist",
            weaponImage: 'assets/images/weapon-image/static-mist.png',
            weaponDescription: "Increases Energy Regen by 25.6%. When Outro Skill is cast, increases the incoming Resonator's ATK by 20%, stacking up to 1 time(s). This effect lasts for 14s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. Rate 24.30%"
        },
        echoElementImage: 'assets/images/element-icons/w-moonlit-icon.png',
        echoElementOutline: "2px solid white",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/impermanence-heron.png',
            echoName: "Impermanence Heron"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/spearback.png',
            echoName1: "Spearback",
            echoImage2: 'assets/images/echo-images/carapace.png',
            echoName2: "Carapace"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/cruisewing.png',
            echoName1: "Cruisewing",
            echoImage2: 'assets/images/echo-images/diamondclaw.png',
            echoName2: "Diamondclaw"
        },
        echoAttribute: {
            echoAttribute1: " Energy Regen + 10%",
            echoAttribute2: "Upon using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s."
        },
        echoAbilityIcon: 'assets/images/echo-images/heron-icon.png',
        echoAbilityDescription: "Transform into Impermanence Heron to fly up and smack down, dealing 310.56% Havoc DMG. " +
                    "Long press to stay as Impermanence Heron and continuously spit flames, each attack dealing 55.73% Havoc DMG. " +
                    "Once the initial attack lands on any enemy, the current character regains 10 Resonance Energy. If the current " +
                    "character uses their Outro Skill within the next 15s, the next character's damage dealt will be boosted by 12% for 15s. CD: 20s",
        normalAttack: {
            normalAttackName: "Half Truths",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Aalto fires up to 5 consecutive shots, dealing Aero DMG. Basic Attack 4 will spread " +
                        "the \"Mist\" forward, which lasts for 1.5s.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Aalto enters the aiming state for a more powerful shot. The aimed shot fired after " +
                        "charging finishes deals Aero DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Aalto consumes STA to perform consecutive shots at the target in mid-air, dealing Aero DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Aero DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/aalto-resSkill.png',
            resSKillName: "",
            resSKill_p: "",
            resSkill_dt1: "Mist Avatar",
            resSkill_dd1: "Casts \"Mist\" and 1 \"Mist Avatar(s)\" to taunt the surrounding targets. " +
                        "The avatars inherit a portion of Aalto's HP and generate 6 Mist Bullets around them, dealing Aero DMG.",

            resSkill_dt2: "Mist Bullets",
            resSkill_dd2: "Deals Aero DMG, considered as Resonance Skill DMG.",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/jinhsi-resLib.png',
            resLibName: "Generate a \"Gate of Quandary\" in front, dealing Aero DMG. " +
                        "When bullets pass through the \"Gate of Quandary\", they deal increased DMG. \"Gate of Quandary\" lasts for 10s.",
            resLib_p: "",
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
            forteCircuitImage: 'assets/images/skill-icons/aalto-forteCircuit.png',
            forteCircuitName: "Misty Cover",
            forteCircuit_p: "When Aalto passes through \"Mist\" or \"Gate of Quandary\", he enters the Mistcloak Dash.",
            forteCircuit_dt1: "Mistcloak Dash",
            forteCircuit_dd1: "-Movement speed increased; -During this period, \"Mist Drops\" are continuously consumed, " +
                        "and for each 1 \"Mist Drop\" consumed, 1 Mist Bullet(s) is generated.",

            forteCircuit_dt2: "Mist Drops",
            forteCircuit_dd2: "Aalto can hold up to 6 \"Mist Drops\". When Basic Attack or Mid-air Attack passes through \"Mist\" and hits the target, 1 \"Mist Drop\" is recovered.",

            forteCircuit_dt3: "",
            forteCircuit_dd3: "",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/aalto-introSkill.png',
            introSkillName: "Feint Shot",
            introSkillDetail: "Aalto shows up out of thin air to perform rapid continuous shooting, dealing Aero DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/aalto-outroSkill.png',
            outroSkillName: "Dissolving Mist",
            outroSkillDetail: "The incoming Resonator has their Aero DMG Amplified by 23% for 14s or until they are switched out."
        }
    },
    youho: {
        name: "Youho",
        rarity: 4,
        element: "Glacio",
        health: 9975,
        attack: 262,
        defense: 1051,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/youho-pile.png',
        elementImage: '/assets/images/element-icons/glacio-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/topological-confinement-icon.png',
        ascensionName1: "Topological Confinement",
        ascensionImage2: 'assets/images/ascencion-icons/violet-coral-icon.png',
        ascensionName2: "Violet Coral",
        ascensionImage3: 'assets/images/ascencion-icons/tailored-ring-icon.png',
        ascensionName3: "Tailored",
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
            glacio: "70.0%",
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Gaunlet", 
            weaponIconImage:'assets/images/weapon-icons/gauntlet-icon.png',
            weaponName: "Abyss Surge",
            weaponImage: 'assets/images/weapon-image/abyss-surge.png',
            weaponDescription: "Increases Energy Regen by 12.8%. When hitting a target with Resonance Skill, " +
                        "increases Basic Attack DMG Bonus by 10%, lasting for 8s. When hitting a target with " +
                        "Basic Attacks, increases Resonance Skill DMG Bonus by 10%, lasting for 8s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "ATK 36.45%"
        },
        echoElementImage: 'assets/images/element-icons/w-moonlit-icon.png',
        echoElementOutline: "2px solid white",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/bell-borne-geochelone.png',
            echoName: "Bell-Borne Geochelone"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/Spearback.png',
            echoName1: "Spearback",
            echoImage2: 'assets/images/echo-images/carapace.png',
            echoName2: "Carapace"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/zig-zag.png',
            echoName1: "Zig Zag",
            echoImage2: 'assets/images/echo-images/diamondclaw.png',
            echoName2: "Diamondclaw"
        },
        echoAttribute: {
            echoAttribute1: "Energy Regen + 10%.",
            echoAttribute2: "Upon using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s."
        },
        echoAbilityIcon: 'assets/images/echo-images/geochelone-icon.png',
        echoAbilityDescription: "Activate the protection of Bell-Borne Geochelone. Deal Glacio DMG based on 145.92% of the current character's DEF " +
                    "to nearby enemies, and obtain a Bell-Borne Shield that lasts for 15s The Bell-Borne Shield provides 50.00% DMG Reduction and " +
                    "10.00% DMG Boost for the current team members, and disappears after the current character is hit for 3 times. CD: 20s",
        normalAttack: {
            normalAttackName: "Frosty Punches",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Perform up to 4 consecutive attacks, dealing Glacio DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "When Frost is full, hold the Normal Attack Button to cast Frostfall. - " +
                        "When Frost is full during the Fortune Rolling state, release the Normal Attack Button to cast " +
                        "Frostfall. If Youhu cannot cast Frostfall at the moment, perform Lucky Draw once instead. Youhu " +
                        "can obtain Frost in the following ways: - When Frost is not full, hold Normal Attack Button to enter " +
                        "the Fortune Rolling state and restore Frost over time. - When Basic Attacks hit a target.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Perform a Plunging Attack at the cost of STA, dealing Glacio DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "When Youhu possesses no Antique, quickly press Normal Attack Button right after a successful Dodge to thrust forward, dealing Glacio DMG, and perform Lucky Draw once."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/youho-resSkill.png',
            resSKillName: "Scroll Divination",
            resSKill_p: "Youhu smashes her scroll down at the enemy, dealing Glacio DMG, restoring HP for all party members nearby, and performs Lucky Draw once.",
            resSkill_dt1: "Lucky Draw",
            resSkill_dd1: "Youhu obtains a random Antique after the Lucky Draw. With an Antique, her next Basic Attack will activate the corresponding Antique Appraisal. Only one Antique can exist at a time, " +
                        "and the newly drawn Antique will replace the existing one.",

            resSkill_dt2: "Antique Appraisal",
            resSkill_dd2: "Chime: Attack the enemy with a Chime, dealing Glacio DMG. Chime can effectively reduce the enemy's Vibration Strength. - Ruyi: Batter the enemy with a Ruyi, dealing Glacio DMG. " +
                        "Ruyi has a higher DMG Multiplier. - Ding: Ram into the enemy on a Ding, dealing Glacio DMG. Ding can effectively break the enemy's stance. - Mask: Throw a Mask at enemies in front, dealing Glacio DMG. " +
                        "Mask can pull in enemies along its path.",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/youho-resLib.png',
            resLibName: "Fortune's Favor",
            resLib_p: "Youhu hurls her scroll at the enemy, causing a Glacio DMG blast in the area. On the blast, four buttons will appear. Choose a button within the specified time to obtain the corresponding Antique. Otherwise, obtain one random Antique.",
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
            forteCircuitImage: 'assets/images/skill-icons/youho-forteCircuit.png',
            forteCircuitName: "Poetic Essence",
            forteCircuit_p: "At four Auspices, hold the Normal Attack button to release Poetic Essence, dealing Glacio DMG, considered as Resonance Skill DMG, while restoring HP for all nearby party members. Youhu can hold up to four Auspices.",
            forteCircuit_dt1: "Poetic Essence",
            forteCircuit_dd1: "Deal Glacio DMG to enemies within the range and additionally obtain one of the following effects based on the Auspice combination: - " +
                        "Free Verse: Four different types Auspices. Additionally reduce the Vibration Strength of hit enemies. - Antithesis: A pair of Auspices. Increase Poetic " +
                        "Essence's DMG by 70%. - Double Pun: Two pairs of Auspices. Additionally restore HP for all nearby party members. - Triplet: Three identical Auspices. " +
                        "Increase Poetic Essence's DMG by 175%. - Perfect Rhyme: Four identical Auspices. Simultaneously activate the effects of Free Verse, Double Pun, and Triplet. Casting Poetic Essence removes all Auspices.",

            forteCircuit_dt2: "Auspice",
            forteCircuit_dd2: "- Youhu gains an Auspice through Antique Appraisal. Use Basic Attack while holding an Antique to receive the corresponding Auspice. - " +
                        "Youhu unlocks Antiques by casting Resonance Skill Scroll Divination, Intro Skill Scroll of Wonders, Heavy Attack Frostfall, " +
                        "Resonance Liberation Fortune's Favor, and Dodge Counter.",

            forteCircuit_dt3: "",
            forteCircuit_dd3: "",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/youho-introSkill.png',
            introSkillName: "Scroll of Wonders",
            introSkillDetail: "Toss out the scroll and perform Lucky Draw once."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/youho-outroSkill.png',
            outroSkillName: "Timeless Classics",
            outroSkillDetail: "The incoming Resonator has their Coordinated Attack DMG Amplified by 100% for 28s."
        }
    },
    lingyang: {
        name: "Lingyang",
        rarity: 5,
        element: "Glacio",
        health: 10387,
        attack: 437,
        defense: 1209,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/linyang-pile.png',
        elementImage: '/assets/images/element-icons/glacio-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/sound-keeping-tacet-core-icon.png',
        ascensionName1: "Sound-Keeping Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/coriolus-icon.png',
        ascensionName2: "Coriolus",
        ascensionImage3: 'assets/images/ascencion-icons/ff-whisperin-core-icon.png',
        ascensionName3: "FF Whisperin Core",
        buildStats: {
            health: 14947,
            attack: 2827,
            defense: 1209,
            critrate: "69.0%",
            critDmg: "234.0%",
            eregen: "120.5%",
            resSkill: 0,
            basicAttack: "27.0%",
            heavyAttack: 0,
            resLib: 0,
            glacio: "70.0%",
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Gaunlet", 
            weaponIconImage:'assets/images/weapon-icons/gauntlet-icon.png',
            weaponName: "Abyss Surge",
            weaponImage: 'assets/images/weapon-image/abyss-surge.png',
            weaponDescription: "Increases Energy Regen by 12.8%. When hitting a target with Resonance Skill, " +
                        "increases Basic Attack DMG Bonus by 10%, lasting for 8s. When hitting a target with " +
                        "Basic Attacks, increases Resonance Skill DMG Bonus by 10%, lasting for 8s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "ATK 36.45%"
        },
        echoElementImage: 'assets/images/element-icons/w-glacio-icon.png',
        echoElementOutline: "2px solid #42b3ff",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/lampylumen-myriad.png',
            echoName: "Lampylumen Myriad"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/tambourinist.png',
            echoName1: "Tambourinist",
            echoImage2: 'assets/images/echo-images/roseshroom.png',
            echoName2: "Roseshroom"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/glacio-prism.png',
            echoName1: "Glacio Prism",
            echoImage2: 'assets/images/echo-images/sabyr-boar.png',
            echoName2: "Sabyr Boar"
        },
        echoAttribute: {
            echoAttribute1: "Glacio DMG + 10%.",
            echoAttribute2: "Glacio DMG + 10% after releasing Basic Attack or Heavy Attack. This effect stacks up to 3 times, each stack lasts 15s."
        },
        echoAbilityIcon: 'assets/images/echo-images/myriad-icon.png',
        echoAbilityDescription: "Transform into Lampylumen Myriad. Perform up to 3 consecutive attacks. " +
                    "Unleash a freezing shock by performing consecutive forward strikes, with the initial two strikes inflicting " +
                    "200.16% and 200.16% Glacio DMG respectively, and the final strike dealing 266.88% Glacio DMG. Enemies will be frozen on hit. " +
                    "Each shock increases the current character's Glacio DMG by 4.00% and Resonance Skill DMG dealt by 4.00% for 15s, stacking up to 3 times CD: 20s",
        normalAttack: {
            normalAttackName: "Majestic Fists",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Lingyang performs up to 5 consecutive attacks, dealing Glacio DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Lingyang consumes STA to attack the target, dealing Glacio DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Lingyang consumes STA to perform a Mid-air Plunging Attack, dealing Glacio DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Glacio DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/lingyang-resSkill.png',
            resSKillName: "Ancient Arts",
            resSKill_p: "",
            resSkill_dt1: "Ancient Arts",
            resSkill_dd1: "Attack the target, dealing Glacio DMG.",

            resSkill_dt2: "Furious Punches",
            resSkill_dd2: "When Basic Attacks 3, 4, or 5 or Basic Attack Feral Roars hits the target, Resonance Skill Ancient " +
                        "Arts is replaced with Resonance Skill Furious Punches. Lingyang's Basic Attack cycle starts from Basic Attack 3 " +
                        "after casting Basic Attack Feral Roars and Resonance Skill Furious Punches in turn.",

            resSkill_dt3: "",
            resSkill_dd3: "Lingyang's Resonance Skill does not reset his Basic Attack cycle."
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/lingyang-resLib.png',
            resLibName: "Strive: Lion's Vigor",
            resLib_p: "Attack the target, dealing Glacio DMG, and receive the blessing of Lion's Vigor.",
            resLib_dt1: "Lion's Vigor",
            resLib_dd1: "Lingyang's Glacio DMG Bonus is increased by 50%",
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
            forteCircuitImage: 'assets/images/skill-icons/lingyang-forteCircuit.png',
            forteCircuitName: "Unification of Spirits",
            forteCircuit_p: "",
            forteCircuit_dt1: "Heavy Attack: Glorious Plunge",
            forteCircuit_dd1: "When \"Lion's Spirit\" is full, use Heavy Attack to perform Glorious Plunge, dealing Glacio DMG.",

            forteCircuit_dt2: "Mid-air Attack: Tail Strike",
            forteCircuit_dd2: "When \"Lion's Spirit\" is not full, use Basic Attack after Heavy Attack to perform Tail Strike, dealing Glacio DMG.",

            forteCircuit_dt3: "Striding Lion",
            forteCircuit_dd3: "After casting Heavy Attack Glorious Plunge, enter Striding Lion state; After casting Intro Skill Lion Awakens or " +
            "Resonance Liberation Strive: Lion's Vigor, if \"Lion's Spirit\" is full, use Basic Attack to enter Striding Lion state. In the Striding " +
            "Lion state: -Attacks can be launched in mid-air. If Lingyang is on the ground, use Heavy Attack Glorious Plunge to get back in the air. " +
            "-\"Lion's Spirit\" is continuously consumed before running out in 5s, and when it runs out, Striding Lion ends; -If Lingyang is in the Resonance " +
            "Liberation Lion's Vigor state, the consumption speed of \"Lion's Spirit\" is reduced by 50%, extending Striding Lion state by up to 10s. " +
            "-Lingyang's Basic Attack is replaced with Basic Attack Feral Gyrate, which performs up to 2 consecutive attacks, dealing Glacio DMG; " +
            "-Lingyang's Resonance Skill is replaced with Mountain Roamer, dealing Glacio DMG; -When \"Lion's Spirit\" is less than 10, use Basic " +
            "Attack to perform Stormy Kicks, dealing Glacio DMG; after performing Basic Attack Stormy Kicks, the Mid-air Attack Tail Strike becomes available. -Concerto Energy is restored when \"Lion's Spirit\" is consumed.",

            forteCircuit_dt4: "Lion's Spirit",
            forteCircuit_dd4: "Lingyang can hold up to 100 \"Lion's Spirit\". When casting Resonance Skill Furious Punches, \"Lion's Spirit\" is restored. " +
                        "When casting Intro Skill Lion Awakens, \"Lion's Spirit\" is restored. When casting Resonance Liberation Strive: Lion's Vigor, \"Lion's Spirit\" is restored.",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/lingyang-introSkill.png',
            introSkillName: "Lion Awakens",
            introSkillDetail: "Lingyang enters the battlefield, dealing Glacio DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/lingyang-outroSkill.png',
            outroSkillName: "Frosty Marks",
            outroSkillDetail: "Lingyang releases a shock wave centered on the skill target, dealing Glacio DMG equal to 587.94% of Lingyang's ATK to targets within the range."
        }
    },
    yuanwu: {
        name: "Yuanwu",
        rarity: 4,
        element: "Electro",
        health: 8525,
        attack: 225,
        defense: 1637,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/yuanwu-pile.png',
        elementImage: '/assets/images/element-icons/electro-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/hidden-thunder-tacet-core-icon.png',
        ascensionName1: "Hidden Thunder Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/terraspawn-fungus-icon.png',
        ascensionName2: "Terraspawn Fungus",
        ascensionImage3: 'assets/images/ascencion-icons/tailored-ring-icon.png',
        ascensionName3: "Tailored Ring",
        buildStats: {
            health: 15365,
            attack: 1115,
            defense: 4611,
            critrate: "69.0%",
            critDmg: "278.0%",
            eregen: "130.5%",
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
            weaponType: "Gauntlet", 
            weaponIconImage:'assets/images/weapon-icons/gauntlet-icon.png',
            weaponName: "Amity Cord",
            weaponImage: 'assets/images/weapon-image/amity-cord.png',
            weaponDescription: "When Intro Skill is cast, increases Resonance Liberation DMG Bonus by 40%, lasting for 15s.",
            weaponAttribute1: "ATK 337.50",
            weaponAttribute2: "DEF 61.56%"
        },
        echoElementImage: 'assets/images/element-icons/w-moonlit-icon.png',
        echoElementOutline: "2px solid white",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/impermanence-heron.png',
            echoName: "Impermanence Heron"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/spearback.png',
            echoName1: "Spearback",
            echoImage2: 'assets/images/echo-images/carapace.png',
            echoName2: "Carapace"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/cruisewing.png',
            echoName1: "Cruisewing",
            echoImage2: 'assets/images/echo-images/diamondclaw.png',
            echoName2: "Diamondclaw"
        },
        echoAttribute: {
            echoAttribute1: " Energy Regen + 10%",
            echoAttribute2: "Upon using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s."
        },
        echoAbilityIcon: 'assets/images/echo-images/heron-icon.png',
        echoAbilityDescription: "Transform into Impermanence Heron to fly up and smack down, dealing 310.56% Havoc DMG. " +
                    "Long press to stay as Impermanence Heron and continuously spit flames, each attack dealing 55.73% Havoc DMG. " +
                    "Once the initial attack lands on any enemy, the current character regains 10 Resonance Energy. If the current " +
                    "character uses their Outro Skill within the next 15s, the next character's damage dealt will be boosted by 12% for 15s. CD: 20s",
        normalAttack: {
            normalAttackName: "Leihuangquan",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Yuanwu performs up to 5 consecutive attacks, dealing Electro DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Yuanwu consumes STA to attack the target, dealing Electro DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Yuanwu consumes STA to launch a Mid-air Plunging Attack, dealing Electro DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Electro DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/yuanwu-resSkill.png',
            resSKillName: "Leihuang Master",
            resSKill_p: "",
            resSkill_dt1: "",
            resSkill_dd1: "Yuanwu summons Thunder Wedge, dealing Electro DMG, and forms a Thunder Field centered on the Thunder Wedge. " +
                        "Thunder Wedge lasts for 12s. Forte Circuit Rumbling Spark and Resonance Liberation Blazing Might will immediately " +
                        "detonate Resonance Skill Thunder Wedge on the field, dealing Electro DMG, considered as Resonance Skill DMG.",

            resSkill_dt2: "Thunder Field",
            resSkill_dd2: "The active character gains the effects below when in the Thunder Field: a Coordinated Attack from Resonance Skill " +
                        "Thunder Wedge is triggered when attacks hit a target, dealing Electro DMG. This can be triggered once every 1.2s. The effect lasts for 1.5s.",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/yuanwu-resLib.png',
            resLibName: "Blazing Might",
            resLib_p: "Awaken the power of thunder and provide Forte Circuit Lightning Infused status to all " +
                        "characters on a nearby team for 10s, then perform a powerful blow that deals Electro DMG.",
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
            forteCircuitImage: 'assets/images/skill-icons/yuanwu-forteCircuit.png',
            forteCircuitName: "Unassuming Blade",
            forteCircuit_p: "",
            forteCircuit_dt1: "Rumbling Spark",
            forteCircuit_dd1: "When \"Readiness\" is full, hold Resonance Skill to " +
                        "consume all \"Readiness\" and cast Rumbling Spark, dealing Electro DMG and entering the Lightning Infused state.",

            forteCircuit_dt2: "Thunder Uprising",
            forteCircuit_dd2: "When \"Readiness\" is full, Resonance Skill Thunder Wedge will be replaced with Thunder Uprising, dealing Electro DMG.",

            forteCircuit_dt3: "",
            forteCircuit_dd3: "",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/-introSkill.png',
            introSkillName: "",
            introSkillDetail: ""
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/-outroSkill.png',
            outroSkillName: "",
            outroSkillDetail: ""
        }
    },
    xiangliyao: {
        name: "Xiangli Yao",
        rarity: 5,
        element: "Electro",
        health: 10625,
        attack: 425,
        defense: 1222,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/xiangliyao-pile.png',
        elementImage: '/assets/images/element-icons/electro-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/hidden-thunder-tacet-core-icon.png',
        ascensionName1: "Hidden Thunder Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/violet-coral-icon.png',
        ascensionName2: "Violet Coral",
        ascensionImage3: 'assets/images/ascencion-icons/ff-whisperin-core-icon.png',
        ascensionName3: "FF Whisperin Core",
        buildStats: {
            health: 15185,
            attack: 3040,
            defense: 1222,
            critrate: "71.3%",
            critDmg: "278.0%",
            eregen: "110%",
            resSkill: "9.4%",
            basicAttack: "27.0%",
            heavyAttack: 0,
            resLib: 0,
            glacio: 0,
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: "10.0%",
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Gauntlet", 
            weaponIconImage:'assets/images/weapon-icons/gauntlet-icon.png',
            weaponName: "Verity's Handle",
            weaponImage: 'assets/images/weapon-image/veritys-handle.png',
            weaponDescription: "Gain 24% Attribute DMG Bonus. When using Resonance Liberation, " +
                        "the wielder gains 96% Resonance Liberation DMG Bonus for 8s. This effect can be extended by " +
                        "5s each time Resonance Skills are cast, up to 3 times.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "Crit. Rate 24.30%"
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
            normalAttackName: "",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Perform up to 5 consecutive attacks, dealing Electro DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Perform a charged attack at the cost of STA, dealing Electro DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Perform a Plunging Attack from mid-air at the cost of STA, dealing Electro DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Electro DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/xiangliyao-resSkill.png',
            resSKillName: "Deduction",
            resSKill_p: "Attack the target, dealing Electro DMG.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/xiangliyao-resLib.png',
            resLibName: "Cogitation Model",
            resLib_p: "Attack the target, dealing Electro DMG. Enter Intuition. When in Intuition: -Obtain 3 Hypercube(s). " +
                        "Each time Resonance Skill Law of Reigns is cast, consume 1 Hypercube(s). Intuition ends once all Hypercubes are consumed. " +
                        "-Basic Attack and Heavy Attack are replaced with Basic Attack Pivot - Impale, which performs up to 3 consecutive attacks, " +
                        "dealing Electro DMG. -Resonance Skill Deduction is replaced with Resonance Skill Divergence, which deals Electro DMG. " +
                        "-Dodge Counter is replaced with Dodge Counter Unfathomed, considered as Resonance Liberation DMG.",
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
            forteCircuitImage: 'assets/images/skill-icons/xiangliyao-forteCircuit.png',
            forteCircuitName: "Forever Seeking",
            forteCircuit_p: "",
            forteCircuit_dt1: "Resonance Skill - Decipher",
            forteCircuit_dd1: "When Capacity reaches 100, Resonance Skill Deduction is replaced by Resonance Skill Decipher. " +
                        "Consume 100 Capacity to cast Resonance Skill Decipher, dealing Electro DMG, considered as Resonance Liberation DMG.",

            forteCircuit_dt2: "Resonance Skill - Law of Reigns",
            forteCircuit_dd2: "When Performance Capacity reaches 5 in Intuition state, Resonance Skill Divergence is replaced by Resonance Skill Law of Reigns. " +
                        "Consume 5 Performance Capacity to cast Resonance Skill Law of Reigns, dealing Electro DMG, considered as Resonance Liberation DMG.",

            forteCircuit_dt3: "Mid-air Attack - Revamp",
            forteCircuit_dd3: "Shortly after casting Resonance Skill Decipher or Resonance Skill Divergence, use Basic Attack to perform Mid-air Attack Revamp at the cost of STA, dealing Electro DMG, considered as Resonance Liberation DMG.",

            forteCircuit_dt4: "Capacity",
            forteCircuit_dd4: "Xiangli Yao can hold up to 100 Capacity. Every Normal Attack Probe on hit grants Capacity. Every Resonance Skill Deduction on hit grants Capacity.",

            forteCircuit_dt5: "Performance Capacity",
            forteCircuit_dd5: "Xiangli Yao can hold up to 5 Performance Capacity. When in Intuition triggered by Resonance Liberation: Obtain 1 Performance Capacity when Stage 1 of Basic Attack Pivot - " +
                        "Impale hits a target. Obtain 2 Performance Capacity when Stage 2 or 3 of Basic Attack Pivot - Impale hits a target. Obtain 2 Performance Capacity for every Resonance Skill Divergence on hit. " +
                        "Obtain 3 Performance Capacity for every Mid-air Attack Revamp on hit. Obtain 2 Performance Capacity for every Dodge Counter Unfathomed on hit.",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/xiangliyao-introSkill.png',
            introSkillName: "Principle",
            introSkillDetail: "Attack the target, dealing Electro DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/xiangliyao-outroSkill.png',
            outroSkillName: "Knowing",
            outroSkillDetail: "Xiangli Yao will call down a laser beam upon the first target the incoming Resonator's Basic Attack hits, dealing Electro DMG equal to 237.63% of Xiangli Yao's ATK to an area. " +
                        "This effect lasts for 8s and can be triggered once every 2s, up to 3 times."
        }
    },
    jianxin: {
        name: "Jianxin",
        rarity: 5,
        element: "Aero",
        health: 14112,
        attack: 337,
        defense: 1124,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/jianxin-pile.png',
        elementImage: '/assets/images/element-icons/aeron-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/roaring-rock-fist-icon.png',
        ascensionName1: "Roaring Rock Fist",
        ascensionImage2: 'assets/images/ascencion-icons/lanternberry-icon.png',
        ascensionName2: "Lanternberry",
        ascensionImage3: 'assets/images/ascencion-icons/tailored-ring-icon.png',
        ascensionName3: "Tailored Ring",
        buildStats: {
            health: 18672,
            attack: 2610,
            defense: 1124,
            critrate: "60.6%",
            critDmg: "217.2%",
            eregen: "194.5%",
            resSkill: "37.6%",
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
            weaponType: "Gaunlet", 
            weaponIconImage:'assets/images/weapon-icons/gauntlet-icon.png',
            weaponName: "Abyss Surge",
            weaponImage: 'assets/images/weapon-image/abyss-surge.png',
            weaponDescription: "Increases Energy Regen by 12.8%. When hitting a target with Resonance Skill, " +
                        "increases Basic Attack DMG Bonus by 10%, lasting for 8s. When hitting a target with " +
                        "Basic Attacks, increases Resonance Skill DMG Bonus by 10%, lasting for 8s.",
            weaponAttribute1: "ATK 587.50",
            weaponAttribute2: "ATK 36.45%"
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
            normalAttackName: "Fengyiquan",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Jianxin performs up to 4 consecutive attacks, dealing Aero DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Jianxin consumes STA to attack the target, dealing Aero DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Jianxin consumes STA to plunge and unleash a powerful kick, dealing Aero DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Aero DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/jianxin-resSkill.png',
            resSKillName: "Calming Air",
            resSKill_p: "Hold Resonance Skill to enter Parry Stance.",
            resSkill_dt1: "Chi Counter",
            resSkill_dd1: "When Jianxin is attacked in the Parry Stance, she does not take damage and immediately performs Chi Counter, dealing Aero DMG.",

            resSkill_dt2: "Chi Parry",
            resSkill_dd2: "Release the Resonance Skill button during Parry Stance to interrupt Parry Stance and perform Chi Parry, dealing Aero DMG.",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/jianxin-resLib.png',
            resLibName: "Purification Force Field",
            resLib_p: "Create a strong wind field, continuously pulling targets within the wind field to the center and dealing Aero DMG. " +
                        "When the wind field disappears, it will trigger an explosion to deal Aero DMG to all targets within the range again.",
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
            forteCircuitImage: 'assets/images/skill-icons/jianxin-forteCircuit.png',
            forteCircuitName: "Primordial Chi Spiral",
            forteCircuit_p: "",
            forteCircuit_dt1: "Heavy Attack: Primordial Chi Spiral",
            forteCircuit_dd1: "When \"Chi\" reaches max stacks, hold Basic Attack to cast Primordial Chi Spiral and start Zhoutian Progress.",

            forteCircuit_dt2: "Zhoutian Progress",
            forteCircuit_dd2: "When Zhoutian Progress ends, regain a shield according to the Zhoutian Progress reached; As the shield provided by Heavy Attack: " +
                        "Primordial Chi Spiral persists, the active character is healed once every 6s.",

            forteCircuit_dt3: "Chi",
            forteCircuit_dd3: "Jianxin can hold up to 120 Chi. Chi is obtained when Normal Attack Fengyiquan hits the target. Chi is obtained when the Resonance Skill Calming Air is cast. " +
                        "Chi is obtained when the Resonance Skills Chi Counter or Chi Parry hits the target. Chi is obtained when the Intro Skill Essence of Tao hits the target.",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/jianxin-introSkill.png',
            introSkillName: "Essence of Tao",
            introSkillDetail: "Pull in targets within the range, dealing Aero DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/jianxin-outroSkill.png',
            outroSkillName: "Transcendence",
            outroSkillDetail: "The incoming Resonator has their Resonance Liberation DMG Amplified by 38% for 14s or until they are switched out."
        }
    },
    baizhi: {
        name: "Baizhi",
        rarity: 4,
        element: "Glacio",
        health: 12812,
        attack: 212,
        defense: 1002,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/baizhi-pile.png',
        elementImage: '/assets/images/element-icons/glacio-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/sound-keeping-tacet-core-icon.png',
        ascensionName1: "Sound-Keeping Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/lanternberry-icon.png',
        ascensionName2: "lanternberry",
        ascensionImage3: 'assets/images/ascencion-icons/ff-howler-core-icon.png',
        ascensionName3: "FF Howler Core",
        buildStats: {
            health: 38916,
            attack: 899,
            defense: 1772,
            critrate: "5.0%",
            critDmg: "150.0%",
            eregen: "203.1%",
            resSkill: "37.6%",
            basicAttack: 0,
            heavyAttack: 0,
            resLib: 0,
            glacio: 0,
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: "36.4%"
        },
        weapon: {
            weaponType: "Rectifier", 
            weaponIconImage:'assets/images/weapon-icons/rectifier-icon.png',
            weaponName: "Variation",
            weaponImage: 'assets/images/weapon-image/variation.png',
            weaponDescription: "When Resonance Skill is cast, restores 16 Concerto Energy. This effect can be triggered 1 times every 20s.",
            weaponAttribute1: "ATK 337.50",
            weaponAttribute2: "Energy Regen 51.84%"
        },
        echoElementImage: 'assets/images/element-icons/w-rejuv-glow-icon.png',
        echoElementOutline: "2px solid #9fe02c",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/bell-borne-geochelone.png',
            echoName: "Bell-Borne Geochelone"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/stonewall-bracer.png',
            echoName1: "Stonewall Bracer",
            echoImage2: 'assets/images/echo-images/hoochief.png',
            echoName2: "Hoochief"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/whiff-whaff.png',
            echoName1: "Whiff Whaff",
            echoImage2: 'assets/images/echo-images/cruisewing.png',
            echoName2: "Cruisewing"
        },
        echoAttribute: {
            echoAttribute1: "Healing Bonus + 10%.",
            echoAttribute2: "Increases the ATK of all party members by 15% for 30s upon healing allies."
        },
        echoAbilityIcon: 'assets/images/echo-images/geochelone-icon.png',
        echoAbilityDescription: "Activate the protection of Bell-Borne Geochelone. Deal Glacio DMG based on 145.92% of the current " +
                    "character's DEF to nearby enemies, and obtain a Bell-Borne Shield that lasts for 15s The Bell-Borne Shield provides " +
                    "50.00% DMG Reduction and 10.00% DMG Boost for the current team members, and disappears after the current character is hit for 3 times. CD: 20s",
        normalAttack: {
            normalAttackName: "Destined Promise",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Baizhi instructs You'tan to perform up to 4 consecutive attacks, dealing Glacio DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Baizhi continuously consumes STA to command You'tan to attack enemies, dealing Glacio DMG. During Heavy Attack, Baizhi can command You'tan to move.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Baizhi consumes STA and summons You'tan in mid-air to perform a Plunging Attack, dealing Glacio DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Glacio DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/baizhi-resSkill.png',
            resSKillName: "Emergency Plan",
            resSKill_p: "Baizhi calls You'tan to attack the target, dealing Glacio DMG while immediately healing all characters on nearby teams.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/baizhi-resLib.png',
            resLibName: "Momentary Union",
            resLib_p: "Baizhi summons You'tan to heal all characters on nearby teams, generating 4 stacks of Remnant Entities.",
            resLib_dt1: "Remnant Entities",
            resLib_dd1: "Remnant Entities follow the active team members. 1 stack(s) of Remnant Entities are automatically consumed " +
                        "to perform Coordinated Attacks every 2.5s, dealing Glacio DMG on hit while healing all characters of the team when the active character is within the range.",
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
            forteCircuitImage: 'assets/images/skill-icons/baizhi-forteCircuit.png',
            forteCircuitName: "Cycle of Life",
            forteCircuit_p: "",
            forteCircuit_dt1: "You'tan",
            forteCircuit_dd1: "A Remnant Creature that answers to Baizhi's mind and desires while sharing all her stats. You'tan goes back to Baizhi when Baizhi dodges.",

            forteCircuit_dt2: "Concentration",
            forteCircuit_dd2: "Baizhi consumes all \"Concentration\" when casting Heavy Attack or Resonance Skill Emergency Plan to continuously heal all Resonators on nearby teams. " +
                        "Each 1 \"Concentration\" consumed provides 1 healing. The healing happens every 2s. When Baizhi consumes \"Concentration\" to cast Heavy Attack, " +
                        "Baizhi additionally restores Concerto Energy and Resonance Energy. When Baizhi consumes \"Concentration\" to cast Resonance Skill Emergency Plan, Baizhi additionally restores Concerto Energy.",

            forteCircuit_dt3: "Forte Gauge: Concentration",
            forteCircuit_dd3: "Baizhi can hold up to 4 \"Concentration\". Baizhi obtains 1 \"Concentration\" for every Basic Attack on hit.",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/baizhi-introSkill.png',
            introSkillName: "Overflowing Frost",
            introSkillDetail: "Baizhi calls You'tan to perform 1 plunging attack, dealing Glacio DMG while healing all characters on a nearby team."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/baizhi-outroSkill.png',
            outroSkillName: "Rejuvinating Flow",
            outroSkillDetail: "Heal the incoming Resonator by 1.54% of Baizhi's max HP every 3s for 30s. The healed Resonator has their DMG Amplified by 15% for 6s."
        }
    },
    zhezhi: {
        name: "Zhezhi",
        rarity: 5,
        element: "Glacio",
        health: 12250,
        attack: 375,
        defense: 1197,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/zheshu-pile.png',
        elementImage: '/assets/images/element-icons/glacio-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/sound-keeping-tacet-core-icon.png',
        ascensionName1: "Sound Keeping Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/lanternberry-icon.png',
        ascensionName2: "Lanternberry",
        ascensionImage3: 'assets/images/ascencion-icons/ff-howler-core-icon.png',
        ascensionName3: "FF Howler Core",
        buildStats: {
            health: 16810,
            attack: 2183,
            defense: 1197,
            critrate: "69.0%",
            critDmg: "306.2%",
            eregen: "130.8%",
            resSkill: 0,
            basicAttack: 0,
            heavyAttack: 0,
            resLib: "18.0%",
            glacio: "70.0%",
            fusion: 0,
            electro: 0,
            aero: 0,
            spectro: "70.0%",
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Rectifier", 
            weaponIconImage:'assets/images/weapon-icons/rectifier-icon.png',
            weaponName: "Rime-Draped Sprouts",
            weaponImage: 'assets/images/weapon-image/rime-draped-sprouts.png',
            weaponDescription: "Increase ATK by 24%. While the wielder is on the field, " +
                        "using Resonance Skill grants 24% Basic Attack DMG Bonus, stacking up to 3 times for 6s. " +
                        "At 3 stacks or above, casting Outro Skill consumes all stacks of this effect and grants the " +
                        "wielder 104% Basic Attack DMG Bonus for 27s, effective when the wielder is off the field.",
            weaponAttribute1: "ATK 500.0",
            weaponAttribute2: "Crit. DMG 72.0%"
        },
        echoElementImage: 'assets/images/element-icons/w-glacio-icon.png',
        echoElementOutline: "2px solid #42b3ff",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/lampylumen-myriad.png',
            echoName: "Lampylumen Myriad"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/tambourinist.png',
            echoName1: "Tambourinist",
            echoImage2: 'assets/images/echo-images/roseshroom.png',
            echoName2: "Roseshroom"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/glacio-dreadmane.png',
            echoName1: "Glacio Dreadmane",
            echoImage2: 'assets/images/echo-images/glacio-prism.png',
            echoName2: "Glacio Prism"
        },
        echoAttribute: {
            echoAttribute1: "Glacio DMG + 10%.",
            echoAttribute2: "Glacio DMG + 10% after releasing Basic Attack or Heavy Attack. This effect stacks up to 3 times, each stack lasts 15s"
        },
        echoAbilityIcon: 'assets/images/echo-images/myriad-icon.png',
        echoAbilityDescription: "Transform into Lampylumen Myriad. Perform up to 3 consecutive attacks. " +
                    "Unleash a freezing shock by performing consecutive forward strikes, with the initial two strikes inflicting " +
                    "200.16% and 200.16% Glacio DMG respectively, and the final strike dealing 266.88% Glacio DMG. Enemies will be frozen on hit. " +
                    "Each shock increases the current character's Glacio DMG by 4.00% and Resonance Skill DMG dealt by 4.00% for 15s, stacking up to 3 times CD: 20s",
        normalAttack: {
            normalAttackName: "Dimming Brush",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Perform up to 3 consecutive attacks, dealing Glacio DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Consume STA to perform an attack, dealing Glacio DMG. Heavy Attack does not reset the Basic Attack cycle.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Consume STA to perform up to 2 consecutive attacks while in mid-air, dealing Glacio DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Glacio DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/zheshi-resSkill.png',
            resSKillName: "Manifestation",
            resSKill_p: "Deal Glacio DMG. If Afflatus is no less than 60, consume 60 Afflatus to summon Phantasmic Imprint - Left and Phantasmic Imprint - Right. " +
                        "-Press the button on the ground to summon the Phantasmic Imprints on the ground. -Hold the button on the ground or press the button in mid-air to summon " +
                        "the Phantasmic Imprints in mid-air.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/zheshi-resLib.png',
            resLibName: "Living Canvas",
            resLib_p: "Summon Inklit Spirits for assistance. Can be cast in mid-air.",
            resLib_dt1: "Inklit Spirit",
            resLib_dd1: "When the active Resonator deals DMG, an Inklit Spirit will be summoned to perform a Coordinated Attack, dealing Glacio DMG, considered as Basic Attack DMG. " +
                        "-For 3s after dealing DMG, 1 Inklit Spirit is summoned per second. This effect can trigger once per second. Damage dealt by an Inklit Spirit does not trigger this effect. " +
                        "-Up to 1 Inklit Spirit can be summoned every second, and up to 21 in total. -This effect lasts for 30s, or until max Inklit Spirits are summoned.",
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
            forteCircuitImage: 'assets/images/skill-icons/zheshi-forteCircuit.png',
            forteCircuitName: "Ink and Wash",
            forteCircuit_p: "",
            forteCircuit_dt1: "Phantasmic Imprint",
            forteCircuit_dd1: "Zhezhi may summon Phantasmic Imprints at the cost of Afflatus when casting Resonance Skill Manifestation or Heavy Attack Conjuration. " +
                        "Up to 1 of each of Phantasmic Imprint - Left, Phantasmic Imprint - Middle, and Phantasmic Imprint - Right can exist at the same time, each lasting for 15s.",

            forteCircuit_dt2: "",
            forteCircuit_dd2: "The 5 moves below consume STA to perform Conjuration to attack the target, dealing Glacio DMG. -Hold the Normal Attack button shortly after Basic Attack Stage 3. " +
                        "-Press the Normal Attack button shortly after casting Resonance Skill Manifestation. -Hold the Normal Attack button shortly after casting Resonance Skill Stroke " +
                        "of Genius or Resonance Skill Creation's Zenith. -Hold the Normal Attack button while in mid-air. -Hold the Normal Attack button after a successful Dodge. " +
                        "If Zhezhi has at least 30 Afflatus when performing any of these, consume 30 Afflatus to summon a Phantasmic Imprint - Middle.",

            forteCircuit_dt3: "Resonance Skill - Stroke of Genius",
            forteCircuit_dd3: "When a Phatasmic Imprint is nearby, the Resonance Skill is replaced with Stroke of Genius, which can be cast while in mid-air. " +
                        "When it is cast, Zhezhi will: -Move to the location of the Phatasmic Imprint, remove it, and then summon an Ivory Herald to attack the target, " +
                        "dealing Glacio DMG, considered as Basic Attack DMG. Refresh the mid-air Dodge attempts if the target Phatasmic Imprint is in mid-air. " +
                        "-Gain 1 stack of Painter's Delight, lasting for 8s and stacking up to 2 times.",

            forteCircuit_dt4: "Resonance Skill - Creation's Zenith",
            forteCircuit_dd4: "When a Phantasmic Imprint is nearby and there are 2 stacks of Painter's Delight, Stroke of Genius is replaced with Creation's Zenith, which can be cast while in mid-air. " +
                        "When it is cast, Zhezhi will: -Lose all stacks of Painter's Delight -Move to the location of the Phantasmic Imprint, remove it, and then summon an Ivory Herald to attack " +
                        "the target, dealing greater Glacio DMG, considered as Basic Attack DMG, additionally increasing the Basic Attack DMG Bonus by 18% for 27s. Refresh the mid-air Dodge " +
                        "attempts if the target Phatasmic Imprint is in mid-air.",

            forteCircuit_dt5: "Afflatus",
            forteCircuit_dd5: "Zhezhi can hold up to 90 Afflatus. Normal Attacks grant Afflatus on hit. Casting Intro Skill grants Afflatus.",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/zheshi-introSkill.png',
            introSkillName: "Radiant Ruin",
            introSkillDetail: "Attack the target, dealing Glacio DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/zhezhi-outroSkill.png',
            outroSkillName: "Carve and Draw",
            outroSkillDetail: "The incoming Resonator has their Glacio DMG Amplified by 20% and Resonance Skill DMG Amplified by 25% for 14s or until they are switched out."
        }
    },
    encore: {
        name: "Encore",
        rarity: 5,
        element: "Fusion",
        health: 10521,
        attack: 425,
        defense: 1246,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/encore-pile.png',
        elementImage: '/assets/images/element-icons/fusion-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/rage-tacet-core-icon.png',
        ascensionName1: "Rage Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/pecok-flower-icon.png',
        ascensionName2: "Pecok Flower",
        ascensionImage3: 'assets/images/ascencion-icons/ff-whisperin-core-icon.png',
        ascensionName3: "FF Whisperin Core",
        buildStats: {
            health: 15702,
            attack: 2274,
            defense: 1246,
            critrate: "83.0%",
            critDmg: "278.0%",
            eregen: "100%",
            resSkill: "28.2%",
            basicAttack: "9.0%",
            heavyAttack: 0,
            resLib: "9.0%",
            glacio: 0,
            fusion: "70.0%",
            electro: 0,
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Rectifier", 
            weaponIconImage:'assets/images/weapon-icons/rectifier-icon.png',
            weaponName: "Stringmaster",
            weaponImage: 'assets/images/weapon-image/stringmaster.png',
            weaponDescription: "Grants 24% Attribute DMG Bonus. When dealing Resonance Skill DMG, increases ATK by 24%, stacking up to 2 times. " +
                        "This effect lasts for 5s. When the wielder is not on the field, increases their ATK by an additional 24%.",
            weaponAttribute1: "ATK 500.0",
            weaponAttribute2: "Crit. Rate 36.0%"
        },
        echoElementImage: 'assets/images/element-icons/w-fusion-icon.png',
        echoElementOutline: "2px solid #f6764f",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/inferno-rider.png',
            echoName: "Inferno Rider"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/havoc-dreadmane.png',
            echoName1: "Havoc Dreadmane",
            echoImage2: 'assets/images/echo-images/viridblaze-saurian.png',
            echoName2: "Viridblaze Saurian"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/fusion-prism.png',
            echoName1: "Fusion Prism",
            echoImage2: 'assets/images/echo-images/snip-snap.png',
            echoName2: "Snip Snap"
        },
        echoAttribute: {
            echoAttribute1: "Fusion DMG + 10%.",
            echoAttribute2: " Fusion DMG + 30% for 15s after releasing Resonance Skill."
        },
        echoAbilityIcon: 'assets/images/echo-images/rider-icon.png',
        echoAbilityDescription: "Transform into the Inferno Rider to launch up to 3 consecutive slashes in a row, " +
                    "each slash dealing 242.40%, 282.80%, and 282.80% Fusion DMG respectively. After the final hit, " +
                    "increase the current Resonator's Fusion DMG by 12.00% and Basic Attack DMG by 12.00% for 15s. " +
                    "Long press the Echo Skill to transform into the Inferno Rider and enter Riding Mode. When exiting Riding Mode, deal 282.80% Fusion DMG to enemies in front. CD: 20s",
        normalAttack: {
            normalAttackName: "Wooly Attack",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Encore performs up to 4 consecutive attacks, dealing Fusion DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Encore consumes STA to attack the target, dealing Fusion DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Encore consumes STA to perform a Mid-Air Plunging Attack, dealing Fusion DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/encore-resSkill.png',
            resSKillName: "Flaming Woolies",
            resSKill_p: "",
            resSkill_dt1: "Flaming Woolies",
            resSkill_dd1: "Encore summons Cloudy and Cosmos to attack with burning rays, dealing Fusion DMG.",

            resSkill_dt2: "Energetic Welcome",
            resSkill_dd2: "After casting Flaming Woolies, use Resonance Skill to perform Energetic Welcome, dealing Fusion DMG.",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/encore-resLib.png',
            resLibName: "Cosmos Rave",
            resLib_p: "As Encore loses control, Cosmos breaks free and wreaks havoc on its surroundings.",
            resLib_dt1: "Basic Attack: Cosmos - Frolicking",
            resLib_dd1: "During Cosmos Rave, the Basic Attack is replaced with Cosmos - Frolicking, which performs up to 4 " +
                        "consecutive attacks, dealing Fusion DMG, considered as Basic Attack DMG.",
            resLib_dd2: "",

            resLib_dt2: "Cosmos - Heavy Attack",
            resLib_dd3: "During Cosmos Rave, the Heavy Attack is replaced with Cosmos - Heavy Attack, consuming STA to attack " +
                        "the target, dealing Fusion DMG, considered as Heavy Attack DMG.",

            resLib_dt3: "Resonance Skill: Cosmos - Rampage",
            resLib_dd4: "During Cosmos Rave, Flaming Woolies is replaced with Cosmos - Rampage, dealing Fusion DMG, considered as Resonance Skill DMG.",

            resLib_dt4: "Cosmos - Dodge Counter",
            resLib_dd5: "During Cosmos Rave, use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG, considered as Basic Attack DMG.",

            resLib_dt5: "",
            resLib_dd6: "",
        },
        forteCircuit: {
            forteCircuitImage: 'assets/images/skill-icons/encore-forteCircuit.png',
            forteCircuitName: "Black & White Woolies",
            forteCircuit_p: "",
            forteCircuit_dt1: "Heavy Attack: Cloudy Frenzy",
            forteCircuit_dd1: "When Encore's \"Mayhem\" is full, after casting a Heavy Attack, Encore will consume all \"Mayhem\" to enter the Mayhem state, reducing damage taken by 70%. " +
                        "Switching Characters does not interrupt the Mayhem state. After the Mayhem state ends, Encore will cast Cloudy Frenzy, dealing Fusion DMG, considered as Resonance Liberation damage.",

            forteCircuit_dt2: "Heavy Attack: Cosmos Rupture",
            forteCircuit_dd2: "During Cosmos Rave, when casting Heavy Attack, if \"Mayhem\" is full, Encore will consume all \"Mayhem\" to enter Cosmos' Mayhem state, reducing damage taken by 70%. " +
                        "Switching Characters does not interrupt the Cosmos' Mayhem state. After Cosmos' Mayhem state ends, Encore will cast Cosmos Rupture, dealing Fusion DMG, considered as Resonance Liberation DMG.",

            forteCircuit_dt3: "",
            forteCircuit_dd3: "Encore can hold up to 100 \"Mayhem\". When Normal Attack Wooly Attack hits a target, Encore restores \"Mayhem\". " +
                        "When Resonance Skill Flaming Woolies hits a target, Encore restores \"Mayhem\". When Resonance Skill Energetic Welcome hits a target, Encore restores \"Mayhem\". " +
                        "When Intro Skill Woolies Helpers hits a target, Encore restores \"Mayhem\". During the duration of Resonance Liberation Cosmos Rave, Encore restores \"Mayhem\" when hitting a target.",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/encore-introSkill.png',
            introSkillName: "Woolies Helpers",
            introSkillDetail: "Encore pounces at the enemies with Cosmos, dealing Fusion DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/encore-outroSkill.png',
            outroSkillName: "Thermal Field",
            outroSkillDetail: "Encore generates a Thermal Field centered around skill target, with a radius of 3m. Targets inside the Thermal Field are continuously burned, " +
                        "suffering Fusion DMG equal to 176.76% of Encore's ATK every 1.5s for 6s."
        }
    },
    yinlin: {
        name: "Yinlin",
        rarity: 5,
        element: "Electro",
        health: 11000,
        attack: 400,
        defense: 1283,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/yinlin-pile.png',
        elementImage: '/assets/images/element-icons/electro-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/group-abomination-tacet-core-icon.png',
        ascensionName1: "Group Abomination Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/coriolus-icon.png',
        ascensionName2: "Coriolus",
        ascensionImage3: 'assets/images/ascencion-icons/ff-whisperin-core-icon.png',
        ascensionName3: "FF Whisperin Core",
        buildStats: {
            health: 15560,
            attack: 2229,
            defense: 1283,
            critrate: "76.0%",
            critDmg: "278.2%",
            eregen: "110.3%",
            resSkill: "47.0%",
            basicAttack: 0,
            heavyAttack: 0,
            resLib: 0,
            glacio: 0,
            fusion: 0,
            electro: "70.0%",
            aero: 0,
            spectro: 0,
            havoc: 0,
            healing: 0
        },
        weapon: {
            weaponType: "Rectifier", 
            weaponIconImage:'assets/images/weapon-icons/rectifier-icon.png',
            weaponName: "Stringmaster",
            weaponImage: 'assets/images/weapon-image/stringmaster.png',
            weaponDescription: "Grants 24% Attribute DMG Bonus. When dealing Resonance Skill DMG, increases ATK by 24%, stacking up to 2 times. " +
                        "This effect lasts for 5s. When the wielder is not on the field, increases their ATK by an additional 24%.",
            weaponAttribute1: "ATK 500.0",
            weaponAttribute2: "Crit. Rate 36.0%"
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
            normalAttackName: "Zapstring's Dance",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Yinlin controls the puppet \"Zapstring\" to perform up to 4 attacks, dealing Electro DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Yinlin consumes STA to control \"Zapstring\", dealing Electro DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Yinlin consumes STA to control \"Zapstring\" to perform a Mid-air Plunging Attack, dealing Electro DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Electro DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/yinlin-resSkill.png',
            resSKillName: "Magnetic Roar",
            resSKill_p: "",
            resSkill_dt1: "Magnetic Roar",
            resSkill_dd1: "The puppet \"Zapstring\" deals Electro DMG to the target, and puts Yinlin in Resonance Skill Execution Mode.",

            resSkill_dt2: "Execution Mode",
            resSkill_dd2: "Basic Attack and Dodge Counter will trigger 1 Electromagnetic Blast when hitting a target. Each stage of Basic Attack " +
                        "or Dodge Counter can only trigger 1 Electromagnetic Blast, up to 4 times.",

            resSkill_dt3: "Electromagnetic Blast",
            resSkill_dd3: "Attack all targets marked with Forte Circuit Sinner's Mark, dealing Electro DMG."
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/yinlin-resLib.png',
            resLibName: "Thundering Wrath",
            resLib_p: "Command \"Zapstring\" to call for thunder to fall upon a large range, dealing Electro DMG.",
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
            forteCircuitImage: 'assets/images/skill-icons/yinlin-forteCircuit.png',
            forteCircuitName: "Chameleon Cipher",
            forteCircuit_p: "",
            forteCircuit_dt1: "Chameleon Cipher",
            forteCircuit_dd1: "When Yinlin's Judgment Points are full, her Heavy Attack is replaced with Chameleon Cipher, which consumes all Judgment Points to attack the target, " +
                        "dealing Electro DMG. When it hits a target marked with Sinner's Mark, the Sinner's Mark is replaced with Punishment Mark, lasting for 18s. Chameleon Cipher deals Heavy Attack DMG.",

            forteCircuit_dt2: "Sinner's Mark",
            forteCircuit_dd2: "Basic Attack Zapstring's Dance, Resonance Liberation Thundering Wrath, and Intro Skill Roaring Storm apply Sinner's Mark to the target on hit. Sinner's Mark is removed when Yinlin is switched out.",

            forteCircuit_dt3: "Punishment Mark",
            forteCircuit_dd3: "When a target marked with Punishment Mark takes damage, Judgement Strike will fall, triggering Coordinated Attacks to all targets marked with Punishment Mark, dealing Electro DMG. " +
                        "This can be triggered up to 1 time per second. Judgement Strike deals Resonance Skill DMG.",

            forteCircuit_dt4: "Judgment Points",
            forteCircuit_dd4: "Yinlin can hold up to 100 Judgement Points. Yinlin gains Judgement Points through the following ways: Upon casting Intro Skill Raging Storm When Basic Attack Zapstring's Dance hits a target " +
                        "Upon casting Resonance Skill Magnetic Roar; When Resonance Skill Electromagnetic Blast hits a target; Upon casting Resonance Skill Lightning Execution.",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/yinlin-introSkill.png',
            introSkillName: "Raging Storm",
            introSkillDetail: "Command puppet \"Zapstring\" to attack, dealing Electro DMG in a large range."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/yinlin-outroSkill.png',
            outroSkillName: "Strategist",
            outroSkillDetail: "The incoming Resonator has their Electro DMG Amplified by 20% and Resonance Liberation DMG Amplified by 25% for 14s or until they are switched out."
        }
    },
    verina: {
        name: "Verina",
        rarity: 5,
        element: "Spectro",
        health: 14237,
        attack: 337,
        defense: 1099,
        critRate: '5%',
        critDmg: '150%',
        energyRegen: '100%',
        image: '/assets/images/character-img/verina-pile.png',
        elementImage: '/assets/images/element-icons/spectro-icon.png',
        ascensionImage1: 'assets/images/ascencion-icons/elegy-tacet-core-icon.png',
        ascensionName1: "Elegy Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/belle-poppy-icon.png',
        ascensionName2: "Belle Poppy",
        ascensionImage3: 'assets/images/ascencion-icons/ff-howler-core-icon.png',
        ascensionName3: "FF Howler Core",
        buildStats: {
            health: 28449,
            attack: 1478,
            defense: 2590,
            critrate: "5.0%",
            critDmg: "150.0%",
            eregen: "204.3%",
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
            healing: "36.4%"
        },
        weapon: {
            weaponType: "Rectifier",
            weaponIconImage:'assets/images/weapon-icons/rectifier-icon.png',
            weaponName: "Variation",
            weaponImage: 'assets/images/weapon-image/variation.png',
            weaponDescription: "When Resonance Skill is cast, restores 16 Concerto Energy. This effect can be triggered 1 times every 20s.",
            weaponAttribute1: "ATK 337.50",
            weaponAttribute2: "Energy Regen 51.84%"
        },
        echoElementImage: 'assets/images/element-icons/w-rejuv-glow-icon.png',
        echoElementOutline: "2px solid #9fe02c",
        echo_four_cost: {
            echoImage: 'assets/images/echo-images/bell-borne-geochelone.png',
            echoName: "Bell-Borne Geochelone"
        },
        echo_three_cost: {
            echoImage1: 'assets/images/echo-images/stonewall-bracer.png',
            echoName1: "Stonewall Bracer",
            echoImage2: 'assets/images/echo-images/hoochief.png',
            echoName2: "Hoochief"
        },
        echo_one_cost: {
            echoImage1: 'assets/images/echo-images/whiff-whaff.png',
            echoName1: "Whiff Whaff",
            echoImage2: 'assets/images/echo-images/cruisewing.png',
            echoName2: "Cruisewing"
        },
        echoAttribute: {
            echoAttribute1: "Healing Bonus + 10%.",
            echoAttribute2: "Increases the ATK of all party members by 15% for 30s upon healing allies."
        },
        echoAbilityIcon: 'assets/images/echo-images/geochelone-icon.png',
        echoAbilityDescription: "Activate the protection of Bell-Borne Geochelone. Deal Glacio DMG based on 145.92% of the current " +
                    "character's DEF to nearby enemies, and obtain a Bell-Borne Shield that lasts for 15s The Bell-Borne Shield provides " +
                    "50.00% DMG Reduction and 10.00% DMG Boost for the current team members, and disappears after the current character is hit for 3 times. CD: 20s",
        normalAttack: {
            normalAttackName: "Cultivation",
            normalAttack_p: "",
            normalAttack_dt1: "Basic Attack",
            normalAttack_dd1: "Verina performs up to 5 consecutive attacks with vines, dealing Spectro DMG.",

            normalAttack_dt2: "Heavy Attack",
            normalAttack_dd2: "Verina consumes STA to charge forward, dealing Spectro DMG.",

            normalAttack_dt3: "Mid-air Attack",
            normalAttack_dd3: "Verina consumes STA to perform up to 3 consecutive attacks in mid-air, dealing Spectro DMG.",

            normalAttack_dt4: "Dodge Counter",
            normalAttack_dd4: "Use Basic Attack after a successful Dodge to attack the target, dealing Spectro DMG."
        },
        resSkill: {
            resSkillImage: 'assets/images/skill-icons/verina-resSkill.png',
            resSKillName: "Botany Experiment",
            resSKill_p: "Verina converges an energy field in front to grow foliage, dealing Spectro DMG within the range.",
            resSkill_dt1: "",
            resSkill_dd1: "",

            resSkill_dt2: "",
            resSkill_dd2: "",

            resSkill_dt3: "",
            resSkill_dd3: ""
        },
        resLib: {
            resLibImage: 'assets/images/skill-icons/verina-resLib.png',
            resLibName: "Arboreal Flourish",
            resLib_p: "Verina nourishes nearby foliage at rapid speed, dealing Spectro DMG while healing all Characters on teams nearby. " +
                        "A Photosynthesis Mark is applied to the target on hit.",
            resLib_dt1: "Photosynthesis Mark",
            resLib_dd1: "Whenever a Character on a team nearby performs an attack on targets with a Photosynthesis Mark, Verina performs a Coordinated Attack, " +
                        "dealing Spectro DMG while healing the active Character dealing damage on a team nearby, triggered 1 time per second.",
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
            forteCircuitImage: 'assets/images/skill-icons/verina-forteCircuit.png',
            forteCircuitName: "Starflower Blooms",
            forteCircuit_p: "",
            forteCircuit_dt1: "Heavy Attack: Starflower Blooms",
            forteCircuit_dd1: "When casting Heavy Attack, if Verina carries \"Photosynthesis Energy\", Verina consumes 1 stack of \"Photosynthesis Energy\" to recover Concerto Energy and heal all characters on a nearby team. Heavy Attack: " +
                        "Starflower Blooms deals Spectro DMG, considered as Heavy Attack DMG.",

            forteCircuit_dt2: "Mid-air Attack: Starflower Blooms",
            forteCircuit_dd2: "When casting Mid-air Attack, if Verina carries \"Photosynthesis Energy\", Verina consumes 1 stack of \"Photosynthesis Energy\" to recover Concerto Energy and heal all " +
                        "characters on a nearby team. Mid-air Attack: Starflower Blooms deals Spectro DMG, considered as Basic Attack DMG. Verina can cast Mid-air Attack: Starflower Blooms " +
                        "by using Basic Attack after casting Heavy Attack: Starflower Blooms.",

            forteCircuit_dt3: "Photosynthesis Energy",
            forteCircuit_dd3: "Verina can hold up to 4 \"Photosynthesis Energy\". Verina obtains 1 stack of \"Photosynthesis Energy\" for every Basic Attack 5 on hit. " +
                        "Verina obtains 1 stack of \"Photosynthesis Energy\" for every Resonance Skill Botany Experiment on hit. Verina obtains 1 stack of " +
                        "\"Photosynthesis Energy\" for every Intro Skill Verdant Growth on hit.",

            forteCircuit_dt4: "",
            forteCircuit_dd4: "",

            forteCircuit_dt5: "",
            forteCircuit_dd5: "",
        },
        introSkill: {
            introSkillImage: 'assets/images/skill-icons/verina-introSkill.png',
            introSkillName: "Verdant Growth",
            introSkillDetail: "Verina attacks the target, dealing Spectro DMG."
        },
        outroSkill: {
            outroSkillImage: 'assets/images/skill-icons/verina-outroSkill.png',
            outroSkillName: "Blossom",
            outroSkillDetail: "Heal the incoming Resonator by 19% of Verina's ATK per second for 6s. All Resonators on nearby teams have their DMG Amplified by 15% for 30s."
        }
    }
};

function showCharacterList() {
    document.getElementById('statsDisplay').style.display = 'none';
    document.getElementById('character-table').style.display = 'block';
}

