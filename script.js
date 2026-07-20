const tabs = document.querySelectorAll('.tab');
const files = document.querySelectorAll('.sidebar .file');
const panes = document.querySelectorAll('.pane');

function activate(target){
  tabs.forEach(t => t.classList.toggle('active', t.dataset.target === target));
  files.forEach(f => f.classList.toggle('active', f.dataset.target === target));
  panes.forEach(p => p.classList.toggle('active', p.id === target));
}

tabs.forEach(t => t.addEventListener('click', () => activate(t.dataset.target)));
files.forEach(f => f.addEventListener('click', () => activate(f.dataset.target)));
