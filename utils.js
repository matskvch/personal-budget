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

function deleteEnvelope(id, array) {
    const findId = (element) => element.id === id;
    const findIndex = array.findIndex(findId)

    array.splice(findIndex, 1)
}

function changeEnvelope(id, array, newTitle, amount) {
    const envelope = findEnvelope(id, array);

    if (envelope) {
        if (newTitle) {
            envelope.title = newTitle;
        }

        if (amount >= 0) {
            envelope.budget -= amount;
        }
    }

    return envelope;
}

export { createEnvelope, findEnvelope, changeEnvelope, deleteEnvelope }
