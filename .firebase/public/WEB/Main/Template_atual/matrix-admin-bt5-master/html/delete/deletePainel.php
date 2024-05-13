<?php
include("../../../../../../config.php");
session_start();
// Se o formulário de exclusão foi submetido
if(isset($_GET['key'])) {
    $key = $_GET['key']; // Chave do item a ser excluído
    
    // Referência para o nó específico do item a ser excluído
    $CadastraPainel = $database->getReference('CadastraPainel/'.$key)->remove();
    if($CadastraPainel) {
        $_SESSION['message'] = 'Painel apagado com sucesso';
        header('Location:../tables.php');
    }
}