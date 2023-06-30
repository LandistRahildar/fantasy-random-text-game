{
    const weapons = ['sword','axe', 'mace', 'bow', 'crossbow', 'wand'];
    const itemsTypes = ['wooden', 'bronze', 'steel', 'silver', 'golden'];

    document.getElementById("equipmentButton").onclick = function () {
        const characterName = document.getElementById("characterName").value;
        const randomWeapon = Math.floor(Math.random() * weapons.length);
        const randomItemType = Math.floor(Math.random() * itemsTypes.length);
        document.getElementById("characterWithEquipment").innerHTML = `Your character name is ${characterName}. <br> 
        ${characterName} random items are: <br>
        ${itemsTypes[randomItemType]} ${weapons[randomWeapon]} <br>
        ${itemsTypes[randomItemType]} helmet <br>
        ${itemsTypes[randomItemType]} armor <br>
        ${itemsTypes[randomItemType]} legs <br>
        ${itemsTypes[randomItemType]} boots <br>
        `;
    }
}