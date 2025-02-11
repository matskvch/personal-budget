let lastUsedId = 1

function createEnvelope(title, budget) {
    lastUsedId += 1
    return {
        id: lastUsedId,
        title: title,
        budget: budget
    }
}

function findEnvelope(id, array) {
    let specificEnvelope
    const findSpecificEnvelope = array.filter(envelope => {
        if (envelope.id === id) {
            specificEnvelope = envelope
        }
    })

    return specificEnvelope
}

export { createEnvelope, findEnvelope }
