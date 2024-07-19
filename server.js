function submitAnswer() {
    const answer = document.getElementById("answerInput").value.trim();
    if (answer !== "" && currentQuestionIndex !== null) {
        const respondente = document.getElementById("respondenteNome").textContent;
        const question = questions[currentQuestionIndex];
        console.log(`Respondente: ${respondente}, Pergunta: ${question}, Resposta: ${answer}`);
        // Aqui você pode adicionar a lógica para enviar a resposta para o servidor ou salvar em algum lugar
        alert("Resposta enviada com sucesso!");
        closePopup();
    } else {
        alert("Por favor, digite uma resposta.");
    }
}