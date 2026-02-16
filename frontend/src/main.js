const btn = document.getElementById('check')
const result = document.getElementById('result')

btn.addEventListener('click', async () => {
  const res = await fetch('http://localhost:3000/status')
  const data = await res.json()
  result.textContent = data.status
})
