function filterCharacters() {
    const selectedElement = document.getElementById('element-select').value;
    const selectedWeapon = document.getElementById('weapon-select').value;
    const characterDivs = document.querySelectorAll('#characters-cell > div');
    
    // If both "all" are selected, remove all outlines and return
    if (selectedElement === 'all' && selectedWeapon === 'all') {
        characterDivs.forEach(div => div.classList.remove('selected-element'));
        return;
    }

    characterDivs.forEach(div => {
        const characterElement = div.getAttribute('data-element');
        const characterWeapon = div.getAttribute('data-weapon');
        
        // Remove all previous selections
        div.classList.remove('selected-element');
        
        // Apply filters
        let matchesElement = selectedElement === 'all' || characterElement === selectedElement;
        let matchesWeapon = selectedWeapon === 'all' || characterWeapon === selectedWeapon;
        
        // If both criteria match, add the outline
        if (matchesElement && matchesWeapon) {
            div.classList.add('selected-element');
        }
    });
}

// Event listeners for both element and weapon selects
document.getElementById('element-select').addEventListener('change', filterCharacters);
document.getElementById('weapon-select').addEventListener('change', filterCharacters);