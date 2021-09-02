async function prefetchNode (store) {
  const data = await window.ipc.invoke('GET_STORE_VALUE', 'selectedNode')
  await store.dispatch('selectNode', data || null)
}

async function prefetchPlan (store) {
  const data = await window.ipc.invoke('GET_STORE_VALUE', 'selectedPlan')
  await store.dispatch('selectPlan', data || null)
}

async function prefetchPayment (store) {
  const data = await window.ipc.invoke('GET_STORE_VALUE', 'paymentResult')
  await store.dispatch('setPaymentResult', data || null)
}

export async function prefetchStore (store) {
  try {
    await Promise.allSettled([
      prefetchNode(store),
      prefetchPlan(store),
      prefetchPayment(store)]
    )
  } catch (e) {
    console.log(e)
  }
}

export async function syncStoreValue (key, data) {
  return await window.ipc.invoke('SET_STORE_VALUE', JSON.stringify({ key, data }))
}
