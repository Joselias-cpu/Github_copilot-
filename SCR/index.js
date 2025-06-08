/**
 * Identifica a bandeira do cartão de crédito a partir do número informado.
 * Baseado na estrutura global e nos padrões do arquivo "Estrutura do número do cartão".
 * Suporta até 16 dígitos.
 * @param {string} numeroCartao - Número do cartão (apenas dígitos).
 * @returns {string|null} - Nome da bandeira ou null se não identificado.
 */
function identificarBandeira(numeroCartao) {
    const num = numeroCartao.replace(/\D/g, '').slice(0, 16);

    // Visa: Começa com 4
    if (/^4\d{12}(\d{3})?$/.test(num)) {
        return 'Visa';
    }
    // MasterCard: 51-55 ou 2221-2720
    if (/^(5[1-5]\d{14}|2(2[2-9][1-9]\d{12}|2[3-9]\d{13}|[3-6]\d{14}|7[01]\d{13}|720\d{12}))$/.test(num)) {
        return 'MasterCard';
    }
    // American Express: 34 ou 37, 15 dígitos
    if (/^3[47]\d{13}$/.test(num)) {
        return 'American Express';
    }
    // Discover: 6011, 65, 644-649
    if (/^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/.test(num)) {
        return 'Discover';
    }
    // Elo: 4011, 4312, 4389 (pode ter outros, mas estes são exemplos)
    if (/^(4011\d{12}|4312\d{12}|4389\d{12})$/.test(num)) {
        return 'Elo';
    }
    // Hipercard: 6062
    if (/^6062\d{12}$/.test(num)) {
        return 'Hipercard';
    }
    return null;
}

// Exemplos de uso:
console.log(identificarBandeira('4111111111111111')); // Visa
console.log(identificarBandeira('5500000000000004')); // MasterCard
console.log(identificarBandeira('340000000000009'));  // American Express
console.log(identificarBandeira('6011000000000004')); // Discover
console.log(identificarBandeira('4011000000000000')); // Elo
console.log(identificarBandeira('6062000000000000')); // Hipercard