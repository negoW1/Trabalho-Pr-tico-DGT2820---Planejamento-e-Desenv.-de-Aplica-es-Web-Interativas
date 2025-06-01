// Função para trocar valores de duas posições em um vetor
const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

// Função para embaralhar elementos de um vetor
const shuffle = (vetor, qtdTrocas) => {
    for (let i = 0; i < qtdTrocas; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

// Algoritmo Bubble Sort
const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

// Algoritmo Selection Sort
const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(vetor, i, min);
        }
    }
};

// Função de particionamento para Quick Sort
const particionamento = (vetor, inicio, fim) => {
    const pivot = vetor[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (vetor[j] <= pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};

// Algoritmo Quick Sort
const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        const pivotIndex = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pivotIndex - 1);
        quick_sort(vetor, pivotIndex + 1, fim);
    }
    return vetor;
};