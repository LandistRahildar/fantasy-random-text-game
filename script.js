{
    const weapons = ['sword', 'axe', 'mace', 'bow', 'crossbow', 'wand'];
    const itemsTypes = ['clay', 'wooden', 'bronze', 'steel', 'silver', 'golden'];

    //this code looks horrible; redability is really, really bad; how can I improve it?

    document.getElementById("equipmentButton").onclick = function () {
        const characterName = document.getElementById("characterName").value;
        const randomWeapon = Math.floor(Math.random() * weapons.length);
        const randomItemType = Math.floor(Math.random() * itemsTypes.length);
        const randomItemTypeHelmet = Math.floor(Math.random() * itemsTypes.length);
        const randomItemTypeArmor = Math.floor(Math.random() * itemsTypes.length);
        const randomItemTypeLegs = Math.floor(Math.random() * itemsTypes.length);
        const randomItemTypeBoots = Math.floor(Math.random() * itemsTypes.length);
        document.getElementById("characterWithEquipment").innerHTML = `Your character name is ${characterName}. <br> <br>
        ${characterName} random items are: <br>
        ${itemsTypes[randomItemType]} ${weapons[randomWeapon]} <br>
        ${itemsTypes[randomItemTypeHelmet]} helmet <br>
        ${itemsTypes[randomItemTypeArmor]} armor <br>
        ${itemsTypes[randomItemTypeLegs]} legs <br>
        ${itemsTypes[randomItemTypeBoots]} boots <br>
        `;
    }
}