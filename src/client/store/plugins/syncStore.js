export async function prefetchStore (store) {
  try {
    const data = await window.ipc.invoke('GET_STORE_VALUE', 'selectedNode')
    await store.dispatch('selectNode', data || null)
  } catch (e) {
    console.log(e)
  }
}

export async function syncStoreValue (key, data) {
  return await window.ipc.invoke('SET_STORE_VALUE', JSON.stringify({ key, data }))
}
