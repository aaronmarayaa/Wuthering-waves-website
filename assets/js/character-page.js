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
            weaponType: "Broadblade", 
            weaponIconImage:'assets/images/weapon-icons/broadblade-icon.png',
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
        ascensionImage1: 'assets/images/ascencion-icons/strife-tacet-icon.png',
        ascensionName1: "Strife Tacet Core",
        ascensionImage2: 'assets/images/ascencion-icons/belle-poppy-icon.png',
        ascensionName2: "Belle Poppy",
        ascensionImage3: 'assets/images/ascencion-icons/tailored-icon.png',
        ascensionName3: "Tailored",
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
    }
};

function showCharacterList() {
    document.getElementById('statsDisplay').style.display = 'none';
    document.getElementById('character-table').style.display = 'block';
}

