/**
 * Crafting Calculator Application Logic v2.0
 * With Tabs and Weapon Attachments
 */

class CraftingCalculator {
    constructor() {
        this.currentTab = 'weapons';
        this.selectedWeapon = null;
        this.selectedMelee = null;
        this.selectedDrug = null;
        this.selectedAttachments = new Set();
        this.cart = []; // Array of {weaponCode, quantity, attachments, type}
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.populateDropdowns();
    }

    cacheElements() {
        // Tabs
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.tabContents = document.querySelectorAll('.tab-content');
        
        // Weapons tab
        this.weaponSearch = document.getElementById('weapon-search');
        this.weaponDropdown = document.getElementById('weapon-dropdown');
        this.weaponList = document.getElementById('weapon-list');
        this.selectedWeaponDiv = document.getElementById('selected-weapon');
        this.selectedWeaponName = document.getElementById('selected-weapon-name');
        
        // Attachments section
        this.attachmentsSection = document.getElementById('attachments-section');
        this.attachmentsList = document.getElementById('attachments-list');
        
        // Melee tab
        this.meleeSearch = document.getElementById('melee-search');
        this.meleeDropdown = document.getElementById('melee-dropdown');
        this.meleeList = document.getElementById('melee-list');
        this.selectedMeleeDiv = document.getElementById('selected-melee');
        this.selectedMeleeName = document.getElementById('selected-melee-name');
        
        // Drugs tab
        this.drugSearch = document.getElementById('drug-search');
        this.drugDropdown = document.getElementById('drug-dropdown');
        this.drugList = document.getElementById('drug-list');
        this.selectedDrugDiv = document.getElementById('selected-drug');
        this.selectedDrugName = document.getElementById('selected-drug-name');
        
        // Common
        this.quantityInput = document.getElementById('quantity');
        this.decreaseBtn = document.getElementById('decrease-qty');
        this.increaseBtn = document.getElementById('increase-qty');
        
        // Cart buttons
        this.addToCartBtn = document.getElementById('add-to-cart-btn');
        this.calculateAllBtn = document.getElementById('calculate-all-btn');
        this.clearCartBtn = document.getElementById('clear-cart-btn');
        
        // Cart section
        this.cartSection = document.getElementById('cart-section');
        this.cartCount = document.getElementById('cart-count');
        this.cartItems = document.getElementById('cart-items');
        
        // Preview section
        this.previewSection = document.getElementById('preview-section');
        this.previewItemName = document.getElementById('preview-item-name');
        this.previewMaterials = document.getElementById('preview-materials');
        this.previewMoney = document.getElementById('preview-money');
        
        // Results
        this.resultSection = document.getElementById('result-section');
        this.resultItem = document.getElementById('result-item');
        this.resultQty = document.getElementById('result-qty');
        this.calculationBreakdown = document.getElementById('calculation-breakdown');
        this.materialsList = document.getElementById('materials-list');
        this.moneyCost = document.getElementById('money-cost');
        this.moneyValue = document.getElementById('money-value');
        this.totalMaterials = document.getElementById('total-materials');
        
        // Error
        this.errorMessage = document.getElementById('error-message');
        this.errorText = document.getElementById('error-text');
    }

    bindEvents() {
        // Tab switching
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });
        
        // Weapon search
        this.weaponSearch.addEventListener('input', () => this.handleWeaponSearch());
        this.weaponSearch.addEventListener('focus', () => this.showWeaponDropdown());
        
        // Melee search
        this.meleeSearch.addEventListener('input', () => this.handleMeleeSearch());
        this.meleeSearch.addEventListener('focus', () => this.showMeleeDropdown());
        
        // Drug search
        this.drugSearch.addEventListener('input', () => this.handleDrugSearch());
        this.drugSearch.addEventListener('focus', () => this.showDrugDropdown());
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#weapon-search') && !e.target.closest('#weapon-dropdown')) {
                this.weaponDropdown.classList.add('hidden');
            }
            if (!e.target.closest('#melee-search') && !e.target.closest('#melee-dropdown')) {
                this.meleeDropdown.classList.add('hidden');
            }
            if (!e.target.closest('#drug-search') && !e.target.closest('#drug-dropdown')) {
                this.drugDropdown.classList.add('hidden');
            }
        });
        
        // Quantity
        this.decreaseBtn.addEventListener('click', () => {
            this.changeQuantity(-1);
            this.updatePreview();
        });
        this.increaseBtn.addEventListener('click', () => {
            this.changeQuantity(1);
            this.updatePreview();
        });
        this.quantityInput.addEventListener('change', () => {
            this.validateQuantity();
            this.updatePreview();
        });
        this.quantityInput.addEventListener('input', () => this.updatePreview());
        
        // Cart
        this.addToCartBtn.addEventListener('click', () => this.addToCart());
        this.calculateAllBtn.addEventListener('click', () => this.calculateAll());
        this.clearCartBtn.addEventListener('click', () => this.clearCart());
    }

    switchTab(tab) {
        this.currentTab = tab;
        
        // Update tab buttons
        this.tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });
        
        // Update tab content
        this.tabContents.forEach(content => {
            content.classList.toggle('active', content.id === `tab-${tab}`);
        });
        
        // Clear previous selection
        this.hideError();
        this.resultSection.classList.add('hidden');
    }

    populateDropdowns() {
        // Define melee weapon codes
        const meleeCodes = ['KNIFE', 'BAT', 'KNUCKLE', 'DAGGER', 'SWITCHBLADE', 'MACHETE', 'BATTLEAXE', 'FLASHLIGHT'];
        
        // Populate firearms - keep order from recipes.js file, exclude melee
        const firearms = Object.entries(RECIPES)
            .filter(([code, data]) => data.category === 'arma' && !meleeCodes.includes(code))
            .map(([code, data]) => ({ code, ...data }));
        
        this.weaponList.innerHTML = firearms.map(item => this.createDropdownItem(item)).join('');
        
        // Add click handlers for weapons
        this.weaponList.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => this.selectWeapon(item.dataset.code));
        });
        
        // Populate melee weapons
        const melee = Object.entries(RECIPES)
            .filter(([code, data]) => data.category === 'arma' && meleeCodes.includes(code))
            .map(([code, data]) => ({ code, ...data }));
        
        this.meleeList.innerHTML = melee.map(item => this.createDropdownItem(item)).join('');
        
        // Add click handlers for melee
        this.meleeList.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => this.selectMelee(item.dataset.code));
        });
        
        // Populate drugs
        const drugs = Object.entries(RECIPES)
            .filter(([_, data]) => data.category === 'drog')
            .map(([code, data]) => ({ code, ...data }))
            .sort((a, b) => a.name.localeCompare(b.name));
        
        this.drugList.innerHTML = drugs.map(item => this.createDropdownItem(item)).join('');
        
        // Add click handlers for drugs
        this.drugList.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => this.selectDrug(item.dataset.code));
        });
    }

    createDropdownItem(item) {
        return `
            <div class="dropdown-item" data-code="${item.code}">
                <span class="dropdown-item-name">${item.name}</span>
            </div>
        `;
    }

    handleWeaponSearch() {
        const query = this.weaponSearch.value.toLowerCase().trim();
        const items = this.weaponList.querySelectorAll('.dropdown-item');
        
        items.forEach(item => {
            const name = item.querySelector('.dropdown-item-name').textContent.toLowerCase();
            const code = item.dataset.code.toLowerCase();
            item.style.display = (name.includes(query) || code.includes(query)) ? 'flex' : 'none';
        });
        
        this.showWeaponDropdown();
    }

    handleDrugSearch() {
        const query = this.drugSearch.value.toLowerCase().trim();
        const items = this.drugList.querySelectorAll('.dropdown-item');
        
        items.forEach(item => {
            const name = item.querySelector('.dropdown-item-name').textContent.toLowerCase();
            const code = item.dataset.code.toLowerCase();
            item.style.display = (name.includes(query) || code.includes(query)) ? 'flex' : 'none';
        });
        
        this.showDrugDropdown();
    }

    showWeaponDropdown() {
        this.weaponDropdown.classList.remove('hidden');
    }

    showDrugDropdown() {
        this.drugDropdown.classList.remove('hidden');
    }

    showMeleeDropdown() {
        this.meleeDropdown.classList.remove('hidden');
    }

    handleMeleeSearch() {
        const query = this.meleeSearch.value.toLowerCase().trim();
        const items = this.meleeList.querySelectorAll('.dropdown-item');
        
        items.forEach(item => {
            const name = item.querySelector('.dropdown-item-name').textContent.toLowerCase();
            const code = item.dataset.code.toLowerCase();
            item.style.display = (name.includes(query) || code.includes(query)) ? 'flex' : 'none';
        });
        
        this.showMeleeDropdown();
    }

    selectMelee(code) {
        this.selectedMelee = code;
        this.selectedWeapon = null;
        this.selectedDrug = null;
        this.selectedAttachments.clear();
        
        const melee = RECIPES[code];
        this.meleeSearch.value = melee.name;
        this.selectedMeleeName.textContent = melee.name;
        this.selectedMeleeDiv.classList.remove('hidden');
        this.meleeDropdown.classList.add('hidden');
        
        // Hide attachments section for melee weapons
        this.attachmentsSection.classList.add('hidden');
        this.hideError();
        this.updatePreview();
    }

    selectWeapon(code) {
        this.selectedWeapon = code;
        this.selectedDrug = null;
        this.selectedAttachments.clear();
        
        const weapon = RECIPES[code];
        this.weaponSearch.value = weapon.name;
        this.selectedWeaponName.textContent = weapon.name;
        this.selectedWeaponDiv.classList.remove('hidden');
        this.weaponDropdown.classList.add('hidden');
        
        // Show attachments for this weapon
        this.showAttachmentsForWeapon(code);
        this.hideError();
        this.updatePreview();
    }

    selectDrug(code) {
        this.selectedDrug = code;
        this.selectedWeapon = null;
        this.selectedAttachments.clear();
        
        const drug = RECIPES[code];
        this.drugSearch.value = drug.name;
        this.selectedDrugName.textContent = drug.name;
        this.selectedDrugDiv.classList.remove('hidden');
        this.drugDropdown.classList.add('hidden');
        
        // Hide attachments section for drugs
        this.attachmentsSection.classList.add('hidden');
        this.hideError();
        this.updatePreview();
    }

    showAttachmentsForWeapon(weaponCode) {
        // Find attachments for this weapon
        const weaponPrefix = weaponCode.split('_')[0];
        const attachments = Object.entries(RECIPES)
            .filter(([code, data]) => {
                if (data.category !== 'atasament') return false;
                const attachmentPrefix = code.split('_')[0];
                return attachmentPrefix === weaponPrefix || 
                       code.startsWith(weaponCode) ||
                       (weaponCode === 'MICROSMG' && code.startsWith('MICROSMG')) ||
                       (weaponCode === 'GUSENBERG' && code.startsWith('MG')) ||
                       (weaponCode === 'ASSAULTRIFLE' && code.startsWith('AK47')) ||
                       (weaponCode === 'ASSAULTRIFLE_MK2' && code.startsWith('M4'));
            })
            .map(([code, data]) => ({ code, ...data }));
        
        if (attachments.length === 0) {
            this.attachmentsSection.classList.add('hidden');
            return;
        }
        
        this.attachmentsSection.classList.remove('hidden');
        
        this.attachmentsList.innerHTML = attachments.map(att => `
            <div class="attachment-checkbox" data-code="${att.code}">
                <input type="checkbox" id="att-${att.code}" value="${att.code}">
                <label for="att-${att.code}">
                    ${att.name.split(' - ').pop()}
                    <span class="attachment-materials">
                        ${Object.entries(att.materials).map(([k, v]) => `${v} ${k}`).join(', ')}
                    </span>
                </label>
            </div>
        `).join('');
        
        // Add checkbox handlers
        this.attachmentsList.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.selectedAttachments.add(e.target.value);
                } else {
                    this.selectedAttachments.delete(e.target.value);
                }
                this.updatePreview();
            });
        });
    }

    updatePreview() {
        const quantity = parseInt(this.quantityInput.value) || 1;
        let item = null;
        
        if (this.currentTab === 'weapons' && this.selectedWeapon) {
            item = RECIPES[this.selectedWeapon];
        } else if (this.currentTab === 'melee' && this.selectedMelee) {
            item = RECIPES[this.selectedMelee];
        } else if (this.currentTab === 'drugs' && this.selectedDrug) {
            item = RECIPES[this.selectedDrug];
        }
        
        if (!item) {
            this.previewSection.classList.add('hidden');
            return;
        }
        
        this.previewSection.classList.remove('hidden');
        
        // Item name with quantity
        this.previewItemName.textContent = `${item.name} ×${quantity}`;
        
        // Calculate materials
        let materialsHtml = '';
        let totalMoney = item.money || 0;
        
        for (const [mat, qty] of Object.entries(item.materials)) {
            let finalQty = mat === "Grinder" ? 1 : (qty * quantity);
            materialsHtml += `
                <div class="preview-material-row">
                    <span class="preview-material-name">${mat}</span>
                    <span class="preview-material-qty">${finalQty}</span>
                </div>
            `;
        }
        
        // Add attachments
        if (this.currentTab === 'weapons' && this.selectedAttachments.size > 0) {
            this.selectedAttachments.forEach(attCode => {
                const att = RECIPES[attCode];
                materialsHtml += `
                    <div class="preview-material-row" style="opacity: 0.8;">
                        <span class="preview-material-name">↳ ${att.name.split(' - ').pop()}</span>
                        <span class="preview-material-qty"></span>
                    </div>
                `;
                for (const [mat, qty] of Object.entries(att.materials)) {
                    materialsHtml += `
                        <div class="preview-material-row" style="padding-left: 20px; opacity: 0.7;">
                            <span class="preview-material-name">• ${mat}</span>
                            <span class="preview-material-qty">${qty * quantity}</span>
                        </div>
                    `;
                }
            });
        }
        
        this.previewMaterials.innerHTML = materialsHtml;
        
        // Money
        if (totalMoney > 0) {
            this.previewMoney.textContent = `💰 ${(totalMoney * quantity).toLocaleString()} Bani Murdari`;
            this.previewMoney.classList.remove('hidden');
        } else {
            this.previewMoney.classList.add('hidden');
        }
    }

    changeQuantity(delta) {
        let value = parseInt(this.quantityInput.value) || 1;
        value += delta;
        if (value < 1) value = 1;
        if (value > 999) value = 999;
        this.quantityInput.value = value;
    }

    validateQuantity() {
        let value = parseInt(this.quantityInput.value) || 1;
        if (value < 1) value = 1;
        if (value > 999) value = 999;
        this.quantityInput.value = value;
    }

    calculate() {
        const quantity = parseInt(this.quantityInput.value) || 1;
        
        if (this.currentTab === 'weapons') {
            if (!this.selectedWeapon) {
                this.showError('Te rugăm să selectezi o armă.');
                return;
            }
            this.calculateWeapon(quantity);
        } else {
            if (!this.selectedDrug) {
                this.showError('Te rugăm să selectezi un drog.');
                return;
            }
            this.calculateDrug(quantity);
        }
    }

    calculateWeapon(quantity) {
        const weapon = RECIPES[this.selectedWeapon];
        const attachments = Array.from(this.selectedAttachments).map(code => RECIPES[code]);
        
        // Combine materials
        const allMaterials = {};
        let totalMoney = weapon.money || 0;
        
        // Add weapon materials
        for (const [mat, qty] of Object.entries(weapon.materials)) {
            allMaterials[mat] = (allMaterials[mat] || 0) + (qty * quantity);
        }
        
        // Add attachment materials
        attachments.forEach(att => {
            for (const [mat, qty] of Object.entries(att.materials)) {
                allMaterials[mat] = (allMaterials[mat] || 0) + (qty * quantity);
            }
        });
        
        // Display breakdown
        let breakdownHtml = `
            <div class="breakdown-item">
                <span class="breakdown-name">${weapon.name}</span>
                <span class="breakdown-type">Armă</span>
            </div>
        `;
        
        attachments.forEach(att => {
            breakdownHtml += `
                <div class="breakdown-item">
                    <span class="breakdown-name">${att.name.split(' - ').pop()}</span>
                    <span class="breakdown-type">Atașament</span>
                </div>
            `;
        });
        
        this.calculationBreakdown.innerHTML = breakdownHtml;
        
        // Display materials
        const materialsHtml = Object.entries(allMaterials).map(([mat, qty]) => `
            <div class="material-item">
                <span class="material-name">${mat}</span>
                <span class="material-qty">${qty.toLocaleString()}</span>
            </div>
        `).join('');
        
        this.materialsList.innerHTML = materialsHtml;
        
        // Display money
        if (totalMoney > 0) {
            this.moneyValue.textContent = `$${(totalMoney * quantity).toLocaleString()}`;
            this.moneyCost.classList.remove('hidden');
        } else {
            this.moneyCost.classList.add('hidden');
        }
        
        // Update totals
        this.resultItem.textContent = weapon.name;
        this.resultQty.textContent = quantity;
        this.totalMaterials.textContent = Object.values(allMaterials).reduce((a, b) => a + b, 0).toLocaleString();
        
        this.resultSection.classList.remove('hidden');
        this.hideError();
    }

    calculateDrug(quantity) {
        const drug = RECIPES[this.selectedDrug];
        
        // Display materials - Grinder stays at 1 regardless of quantity
        const materialsHtml = Object.entries(drug.materials).map(([mat, qty]) => {
            // Grinder is a tool - always 1, never scales with quantity
            const finalQty = mat === "Grinder" ? 1 : (qty * quantity);
            return `
                <div class="material-item">
                    <span class="material-name">${mat}</span>
                    <span class="material-qty">${finalQty.toLocaleString()}</span>
                </div>
            `;
        }).join('');
        
        this.materialsList.innerHTML = materialsHtml;
        this.calculationBreakdown.innerHTML = '';
        
        // Display money
        if (drug.money > 0) {
            this.moneyValue.textContent = `$${(drug.money * quantity).toLocaleString()}`;
            this.moneyCost.classList.remove('hidden');
        } else {
            this.moneyCost.classList.add('hidden');
        }
        
        // Update totals - Grinder always counts as 1, never scales
        this.resultItem.textContent = drug.name;
        this.resultQty.textContent = quantity;
        const totalMats = Object.entries(drug.materials)
            .reduce((sum, [mat, qty]) => {
                const finalQty = mat === "Grinder" ? 1 : (qty * quantity);
                return sum + finalQty;
            }, 0);
        this.totalMaterials.textContent = totalMats.toLocaleString();
        
        this.resultSection.classList.remove('hidden');
        this.hideError();
    }

    // Cart Methods
    addToCart() {
        const quantity = parseInt(this.quantityInput.value) || 1;
        
        if (this.currentTab === 'weapons') {
            if (!this.selectedWeapon) {
                this.showError('Te rugăm să selectezi o armă.');
                return;
            }
            
            // Add weapon to cart
            const cartItem = {
                type: 'weapon',
                code: this.selectedWeapon,
                name: RECIPES[this.selectedWeapon].name,
                quantity: quantity,
                attachments: Array.from(this.selectedAttachments)
            };
            
            this.cart.push(cartItem);
            
        } else if (this.currentTab === 'melee') {
            if (!this.selectedMelee) {
                this.showError('Te rugăm să selectezi o armă albă.');
                return;
            }
            
            // Add melee to cart
            const cartItem = {
                type: 'melee',
                code: this.selectedMelee,
                name: RECIPES[this.selectedMelee].name,
                quantity: quantity,
                attachments: []
            };
            
            this.cart.push(cartItem);
            
        } else {
            if (!this.selectedDrug) {
                this.showError('Te rugăm să selectezi un drog.');
                return;
            }
            
            // Add drug to cart
            const cartItem = {
                type: 'drug',
                code: this.selectedDrug,
                name: RECIPES[this.selectedDrug].name,
                quantity: quantity
            };
            
            this.cart.push(cartItem);
        }
        
        this.updateCartUI();
        this.hideError();
        
        // Reset selection
        this.resetSelection();
    }
    
    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.updateCartUI();
    }
    
    clearCart() {
        if (this.cart.length === 0) return;
        
        if (confirm('Ești sigur că vrei să ștergi toate itemele din coș?')) {
            this.cart = [];
            this.updateCartUI();
            this.resultSection.classList.add('hidden');
        }
    }
    
    updateCartUI() {
        if (this.cart.length === 0) {
            this.cartSection.classList.add('hidden');
            return;
        }
        
        this.cartSection.classList.remove('hidden');
        this.cartCount.textContent = `${this.cart.length} iteme`;
        
        this.cartItems.innerHTML = this.cart.map((item, index) => {
            const attachmentsText = item.attachments && item.attachments.length > 0 
                ? `+ ${item.attachments.length} atașamente` 
                : '';
            
            return `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-details">${attachmentsText}</span>
                    </div>
                    <span class="cart-item-qty">×${item.quantity}</span>
                    <button class="cart-item-remove" onclick="calculator.removeFromCart(${index})">×</button>
                </div>
            `;
        }).join('');
    }
    
    resetSelection() {
        this.selectedWeapon = null;
        this.selectedMelee = null;
        this.selectedDrug = null;
        this.selectedAttachments.clear();
        
        this.weaponSearch.value = '';
        this.meleeSearch.value = '';
        this.drugSearch.value = '';
        this.selectedWeaponDiv.classList.add('hidden');
        this.selectedMeleeDiv.classList.add('hidden');
        this.selectedDrugDiv.classList.add('hidden');
        this.attachmentsSection.classList.add('hidden');
        this.quantityInput.value = 1;
        this.previewSection.classList.add('hidden');
    }
    
    calculateAll() {
        if (this.cart.length === 0) {
            this.showError('Coșul este gol.');
            return;
        }
        
        // Combine all materials from cart
        const allMaterials = {};
        let totalMoney = 0;
        let breakdownHtml = '';
        
        this.cart.forEach(item => {
            const recipe = RECIPES[item.code];
            const quantity = item.quantity;
            
            // Add to breakdown
            const typeLabel = item.type === 'weapon' ? 'Armă' : item.type === 'melee' ? 'Armă Albă' : 'Drog';
            breakdownHtml += `
                <div class="breakdown-item">
                    <span class="breakdown-name">${recipe.name} ×${quantity}</span>
                    <span class="breakdown-type">${typeLabel}</span>
                </div>
            `;
            
            // Add materials
            for (const [mat, qty] of Object.entries(recipe.materials)) {
                let finalQty = mat === "Grinder" ? 1 : (qty * quantity);
                allMaterials[mat] = (allMaterials[mat] || 0) + finalQty;
            }
            
            // Add money
            if (recipe.money) {
                totalMoney += recipe.money * quantity;
            }
            
            // Add attachment materials
            if (item.attachments) {
                item.attachments.forEach(attCode => {
                    const att = RECIPES[attCode];
                    for (const [mat, qty] of Object.entries(att.materials)) {
                        allMaterials[mat] = (allMaterials[mat] || 0) + (qty * quantity);
                    }
                });
            }
        });
        
        // Display materials
        const materialsHtml = Object.entries(allMaterials).map(([mat, qty]) => `
            <div class="material-item">
                <span class="material-name">${mat}</span>
                <span class="material-qty">${qty.toLocaleString()}</span>
            </div>
        `).join('');
        
        this.materialsList.innerHTML = materialsHtml;
        this.calculationBreakdown.innerHTML = breakdownHtml;
        
        // Display money
        if (totalMoney > 0) {
            this.moneyValue.textContent = `$${totalMoney.toLocaleString()}`;
            this.moneyCost.classList.remove('hidden');
        } else {
            this.moneyCost.classList.add('hidden');
        }
        
        // Update totals
        this.resultItem.textContent = 'Total Coș';
        this.resultQty.textContent = `${this.cart.length} iteme`;
        this.totalMaterials.textContent = Object.values(allMaterials).reduce((a, b) => a + b, 0).toLocaleString();
        
        this.resultSection.classList.remove('hidden');
        this.hideError();
    }

    showError(message) {
        this.errorText.textContent = message;
        this.errorMessage.classList.remove('hidden');
        this.resultSection.classList.add('hidden');
    }

    hideError() {
        this.errorMessage.classList.add('hidden');
    }
}

// Make calculator global for cart remove buttons
let calculator;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    calculator = new CraftingCalculator();
});
