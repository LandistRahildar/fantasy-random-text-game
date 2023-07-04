{
    {
        document.getElementById("characterButton").onclick = function () {
            const characterName = document.getElementById("characterName").value;
            document.getElementById("character").innerHTML = `Your character name is ${characterName}.`;
        }
    }

    {
        const weapons = ['sword', 'axe', 'mace', 'bow', 'crossbow', 'wand'];
        const itemsTypes = ['clay', 'wooden', 'bronze', 'steel', 'silver', 'golden'];

        document.getElementById("equipmentButton").onclick = function () {
            const characterName = document.getElementById("characterName").value;
            const randomWeapon = Math.floor(Math.random() * weapons.length);
            const randomItemType = Math.floor(Math.random() * itemsTypes.length);
            const randomItemTypeHelmet = Math.floor(Math.random() * itemsTypes.length);
            const randomItemTypeArmor = Math.floor(Math.random() * itemsTypes.length);
            const randomItemTypeLegs = Math.floor(Math.random() * itemsTypes.length);
            const randomItemTypeBoots = Math.floor(Math.random() * itemsTypes.length);

            document.getElementById("characterWithEquipment").innerHTML = `
                ${characterName} random items are: <br>
                ${itemsTypes[randomItemType]} ${weapons[randomWeapon]} <br>
                ${itemsTypes[randomItemTypeHelmet]} helmet <br>
                ${itemsTypes[randomItemTypeArmor]} armor <br>
                ${itemsTypes[randomItemTypeLegs]} legs <br>
                ${itemsTypes[randomItemTypeBoots]} boots <br>
            `;
        }
    }

    {
        document.getElementById("statisticsButton").onclick = function () {
            const characterName = document.getElementById("characterName").value;
            let randomAmountOfLuck = Math.floor(Math.random() * 6 + 2);
            let randomAmountOfInsideFire = Math.floor(Math.random() * 3 + 2);

            document.getElementById("characterWithStatistics").innerHTML = `
                ${characterName} random statistics are: <br>
                ${randomAmountOfLuck} points of luck 🍀 <br>
                ${randomAmountOfInsideFire} points of inside fire 🔥 <br>
            `;

            //TO DO: if random amount of luck or fire is 1 it must have 'point' instead of 'points' in HTML

            // if (randomAmountOfLuck, randomAmountOfInsideFire = 1) {
            //     document.getElementById("point").innerHTML = "point";
            // }
        }
    }
}