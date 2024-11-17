/**
 * Gera um QR Code vCard com base nos dados fornecidos.
 * @param {string} elementId - ID do elemento HTML onde o QR Code será exibido.
 */
function gerarQRCodeVcard(elementId) {
    // Obtenha os valores dos campos JetEngine usando os slugs corretos
    var nome = $('[data-jet-engine-dynamic-field="nome_completo"]').text().trim();
    var telefone = $('[data-jet-engine-dynamic-field="telefone"]').text().trim();
    var email = $('[data-jet-engine-dynamic-field="email"]').text().trim();
    var empresa = $('[data-jet-engine-dynamic-field="empresa"]').text().trim();
    var cargo = $('[data-jet-engine-dynamic-field="cargo"]').text().trim();
    var endereco = $('[data-jet-engine-dynamic-field="endereco"]').text().trim();
    var site = $('[data-jet-engine-dynamic-field="site"]').text().trim();

    // Log dos dados capturados para verificação
    console.log("Nome:", nome);
    console.log("Telefone:", telefone);
    console.log("Email:", email);
    console.log("Empresa:", empresa);
    console.log("Cargo:", cargo);
    console.log("Endereço:", endereco);
    console.log("Site:", site);

    // Verifique se todos os campos necessários estão preenchidos
    if (!nome || !telefone || !email) {
        console.error("Campos obrigatórios estão faltando.");
        return;
    }

    var vcard = `BEGIN:VCARD\nVERSION:3.0\nN:${nome}\nTEL:${telefone}\nEMAIL:${email}\nORG:${empresa}\nTITLE:${cargo}\nADR:${endereco}\nURL:${site}\nEND:VCARD`;

    // Gera o QR Code com tamanho 600x600
    var qrcode = new QRCode(document.getElementById(elementId), {
        text: vcard,
        width: 600, // Largura do QR Code
        height: 600, // Altura do QR Code
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.M
    });

    $(`#${elementId}`).attr('alt', `QR Code para ${nome}`);
}

// Inicializa o QR Code quando o documento estiver pronto
jQuery(document).ready(function($) {
    gerarQRCodeVcard('qrcode');
});
