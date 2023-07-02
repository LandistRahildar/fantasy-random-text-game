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
            const randomAmountOfLuck = Math.floor(Math.random() * 7 + 1);
            const randomAmountOfInsideFire = Math.floor(Math.random() * 3 + 1);

            document.getElementById("characterWithStatistics").innerHTML = `
                ${characterName} random statiscics are: <br>
                ${randomAmountOfLuck} points of luck 🍀 <br>
                ${randomAmountOfInsideFire} points of inside fire 🔥 <br>
            `;

            //TO DO: if random amount of luck or fire is 1 it must have 'point' instead of 'points' in HTML

            // if (randomAmountOfLuck = 1) {
            //     // document.getElementById("characterWithStatistics").innerHTML = `point`
            // }
        }
    }
}