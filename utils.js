let lastUsedId = 1

function createEnvelope(title, budget) {
    lastUsedId += 1
    return {
        id: lastUsedId,
        title: title,
        budget: budget
    }
}

export {createEnvelope}
