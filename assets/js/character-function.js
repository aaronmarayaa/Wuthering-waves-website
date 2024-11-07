
function showStats(characterName) {
    const character = characters[characterName];

    document.querySelectorAll('.characterName').forEach((element) => {
        element.innerText = character.name;
    });
    document.getElementById('characterImageImg').src = character.image;
    document.getElementById('characterElementIcon').src = character.elementImage;
    // stats
    document.getElementById('characterElement').innerText = character.element;
    document.getElementById('characterHealth').innerText = character.health;
    document.getElementById('characterAttack').innerText = character.attack;
    document.getElementById('characterDefense').innerText = character.defense;
    document.getElementById('characterCRate').innerText = character.critRate;
    document.getElementById('characterCDmg').innerText = character.critDmg;
    document.getElementById('characterERegen').innerText = character.energyRegen;
    // weapon
    document.getElementById('characterWeapon').innerText = character.weapon.weaponType;
    document.getElementById('characterWeaponName').innerText = character.weapon.weaponName;
    document.getElementById('characterWeaponDescription').innerText = character.weapon.weaponDescription;
    document.getElementById('characterWeaponIcon').src = character.weapon.weaponIconImage;
    document.getElementById('characterWeaponImage').src = character.weapon.weaponImage;
    document.getElementById('weaponAttribute1').innerText = character.weapon.weaponAttribute1;
    document.getElementById('weaponAttribute2').innerText = character.weapon.weaponAttribute2;
    // ascension
    document.getElementById('ascensionName1').innerText = character.ascensionName1;
    document.getElementById('ascensionName2').innerText = character.ascensionName2;
    document.getElementById('ascensionName3').innerText = character.ascensionName3;
    document.getElementById('ascensionImage1').src = character.ascensionImage1;
    document.getElementById('ascensionImage2').src = character.ascensionImage2;
    document.getElementById('ascensionImage3').src = character.ascensionImage3;
    // buildstats
    document.getElementById('buildHealth').innerText = character.buildStats.health;
    document.getElementById('buildAttack').innerText = character.buildStats.attack;
    document.getElementById('buildDefense').innerText = character.buildStats.defense;
    document.getElementById('buildCRate').innerText = character.buildStats.critrate;
    document.getElementById('buildCDmg').innerText = character.buildStats.critDmg;
    document.getElementById('buildERegen').innerText = character.buildStats.eregen;
    document.getElementById('buildResSkill').innerText = character.buildStats.resSkill;
    document.getElementById('buildBAttack').innerText = character.buildStats.basicAttack;
    document.getElementById('buildHAttack').innerText = character.buildStats.heavyAttack;
    document.getElementById('buildResLib').innerText = character.buildStats.resLib;
    document.getElementById('buildGlacio').innerText = character.buildStats.glacio;
    document.getElementById('buildFusion').innerText = character.buildStats.fusion;
    document.getElementById('buildElectro').innerText = character.buildStats.electro;
    document.getElementById('buildAero').innerText = character.buildStats.aero;
    document.getElementById('buildSpectro').innerText = character.buildStats.spectro;
    document.getElementById('buildHavoc').innerText = character.buildStats.havoc;
    document.getElementById('buildHealing').innerText = character.buildStats.healing;
    // echo
    document.getElementById('echoAbilityIcon').src = character.echoAbilityIcon;
    document.getElementById('echoAbilityDescription').innerText = character.echoAbilityDescription;
    document.querySelectorAll('.echo-element').forEach((echoElementOutline) => {
        echoElementOutline.style.outline = character.echoElementOutline;
    });
    document.querySelectorAll('.echo-element').forEach((echoElement) => {
        echoElement.src = character.echoElementImage;
    });
    document.getElementById('characterEchoImage1').src = character.echo_four_cost.echoImage;
    document.getElementById('echoName1').innerText = character.echo_four_cost.echoName;
    document.getElementById('characterEchoImage2').src = character.echo_three_cost.echoImage1;
    document.getElementById('echoName2').innerText = character.echo_three_cost.echoName1;
    document.getElementById('characterEchoImage3').src = character.echo_three_cost.echoImage2;
    document.getElementById('echoName3').innerText = character.echo_three_cost.echoName2;
    document.getElementById('characterEchoImage4').src = character.echo_one_cost.echoImage1;
    document.getElementById('echoName4').innerText = character.echo_one_cost.echoName1;
    document.getElementById('characterEchoImage5').src = character.echo_one_cost.echoImage2;
    document.getElementById('echoName5').innerText = character.echo_one_cost.echoName2;
    document.getElementById('echoAttribute1').innerText = character.echoAttribute.echoAttribute1;
    document.getElementById('echoAttribute2').innerText = character.echoAttribute.echoAttribute2;
    // normal attack
    document.getElementById('normalAttackImage').src = character.normalAttack.normalAttackImage;
    document.getElementById('normalAttackName').innerText = character.normalAttack.normalAttackName;
    const normalAttack = character.normalAttack;
    const normalAttack_keys = [
        { normalAttack_id: 'normalAttack_p', normalAttack_value: normalAttack.normalAttack_p }, 
        { normalAttack_id: 'normalAttack_dt1', normalAttack_value: normalAttack.normalAttack_dt1 },
        { normalAttack_id: 'normalAttack_dd1', normalAttack_value: normalAttack.normalAttack_dd1 },
        { normalAttack_id: 'normalAttack_dt2', normalAttack_value: normalAttack.normalAttack_dt2 },
        { normalAttack_id: 'normalAttack_dd2', normalAttack_value: normalAttack.normalAttack_dd2 },
        { normalAttack_id: 'normalAttack_dt3', normalAttack_value: normalAttack.normalAttack_dt3 },
        { normalAttack_id: 'normalAttack_dd3', normalAttack_value: normalAttack.normalAttack_dd3 },
        { normalAttack_id: 'normalAttack_dt4', normalAttack_value: normalAttack.normalAttack_dt4 },
        { normalAttack_id: 'normalAttack_dd4', normalAttack_value: normalAttack.normalAttack_dd4 }
    ];

    normalAttack_keys.forEach(({normalAttack_id, normalAttack_value}) => {
        const element = document.getElementById(normalAttack_id);
        if (normalAttack_value === "") {
            element.style.display = 'none';
        } else {
            element.innerText = normalAttack_value;
        }
    });

    // resonance skill
    document.getElementById('resSkillImage').src = character.resSkill.resSkillImage;
    document.getElementById('resSkillName').innerText = character.resSkill.resSKillName;
    const resSkill = character.resSkill;
    const resSkill_keys = [
        { resSkill_id: 'resSkill_p', resSkill_value: resSkill.resSKill_p }, 
        { resSkill_id: 'resSkill_dt1', resSkill_value: resSkill.resSkill_dt1 },
        { resSkill_id: 'resSkill_dd1', resSkill_value: resSkill.resSkill_dd1 },
        { resSkill_id: 'resSkill_dt2', resSkill_value: resSkill.resSkill_dt2 },
        { resSkill_id: 'resSkill_dd2', resSkill_value: resSkill.resSkill_dd2 },
        { resSkill_id: 'resSkill_dt3', resSkill_value: resSkill.resSkill_dt3 },
        { resSkill_id: 'resSkill_dd3', resSkill_value: resSkill.resSkill_dd3 }
    ];

    resSkill_keys.forEach(({resSkill_id, resSkill_value}) => {
        const element = document.getElementById(resSkill_id);
        if (resSkill_value === "") {
            element.style.display = 'none';
        } else {
            element.innerText = resSkill_value;
        }
    });

    // resonance liberation
    document.getElementById('resLibImage').src = character.resLib.resLibImage;
    document.getElementById('resLibName').innerText = character.resLib.resLibName;
    const resLib = character.resLib;
    const resLib_keys = [
        { resLib_id: 'resLib_p', resLib_value: resLib.resLib_p }, 
        { resLib_id: 'resLib_dt1', resLib_value: resLib.resLib_dt1 },
        { resLib_id: 'resLib_dd1', resLib_value: resLib.resLib_dd1 },
        { resLib_id: 'resLib_dt2', resLib_value: resLib.resLib_dt2 },
        { resLib_id: 'resLib_dd2', resLib_value: resLib.resLib_dd2 },
        { resLib_id: 'resLib_dt3', resLib_value: resLib.resLib_dt3 },
        { resLib_id: 'resLib_dd3', resLib_value: resLib.resLib_dd3 },
        { resLib_id: 'resLib_dt4', resLib_value: resLib.resLib_dt4 },
        { resLib_id: 'resLib_dd4', resLib_value: resLib.resLib_dd4 },
        { resLib_id: 'resLib_dt5', resLib_value: resLib.resLib_dt5 },
        { resLib_id: 'resLib_dd5', resLib_value: resLib.resLib_dd5 },
        { resLib_id: 'resLib_dd6', resLib_value: resLib.resLib_dd6 }
    ];

    resLib_keys.forEach(({ resLib_id, resLib_value}) => {
        const element = document.getElementById(resLib_id);
        if (resLib_value === "") {
            element.style.display = 'none';
        } else {
            element.innerText = resLib_value;
        }
    });
    // forte circuit
    document.getElementById('forteCircuitImage').src = character.forteCircuit.forteCircuitImage;
    document.getElementById('forteCircuitName').innerText = character.forteCircuit.forteCircuitName;
    const forteCircuit = character.forteCircuit;
    const forteCircuit_keys = [
        { forteCircuit_id: 'forteCircuit_p', forteCircuit_value: forteCircuit.forteCircuit_p }, 
        { forteCircuit_id: 'forteCircuit_dt1', forteCircuit_value: forteCircuit.forteCircuit_dt1 },
        { forteCircuit_id: 'forteCircuit_dd1', forteCircuit_value: forteCircuit.forteCircuit_dd1 },
        { forteCircuit_id: 'forteCircuit_dt2', forteCircuit_value: forteCircuit.forteCircuit_dt2 },
        { forteCircuit_id: 'forteCircuit_dd2', forteCircuit_value: forteCircuit.forteCircuit_dd2 },
        { forteCircuit_id: 'forteCircuit_dt3', forteCircuit_value: forteCircuit.forteCircuit_dt3 },
        { forteCircuit_id: 'forteCircuit_dd3', forteCircuit_value: forteCircuit.forteCircuit_dd3 },
        { forteCircuit_id: 'forteCircuit_dt4', forteCircuit_value: forteCircuit.forteCircuit_dt4 },
        { forteCircuit_id: 'forteCircuit_dd4', forteCircuit_value: forteCircuit.forteCircuit_dd4 },
        { forteCircuit_id: 'forteCircuit_dt5', forteCircuit_value: forteCircuit.forteCircuit_dt5 },
        { forteCircuit_id: 'forteCircuit_dd5', forteCircuit_value: forteCircuit.forteCircuit_dd5 }
    ];

    forteCircuit_keys.forEach(({forteCircuit_id, forteCircuit_value}) => {
        const element = document.getElementById(forteCircuit_id);
        if (forteCircuit_value === "") {
            element.style.display = 'none';
        } else {
            element.innerText = forteCircuit_value;
        }
    });
    // intro skill
    document.getElementById('introSkillImage').src = character.introSkill.introSkillImage;
    document.getElementById('introSkillName').innerText = character.introSkill.introSkillName;
    document.getElementById('introSkillDetail').innerText = character.introSkill.introSkillDetail;
    // outro skill
    document.getElementById('outroSkillImage').src = character.outroSkill.outroSkillImage;
    document.getElementById('outroSkillName').innerText = character.outroSkill.outroSkillName;
    document.getElementById('outroSkillDetail').innerText = character.outroSkill.outroSkillDetail;

    const characterNameElement = document.querySelector('.characterName');
    if (character.rarity === 5) {
        characterNameElement.innerText = character.name + " 5★";
        characterNameElement.style.color = '#ffd66b';
    } else if (character.rarity === 4) {
        characterNameElement.innerText = character.name + " 4★";
        characterNameElement.style.color = '#c96dff';
    }

    document.getElementById('character-table').style.display = 'none';
    document.getElementById('statsDisplay').style.display = 'block';
}

