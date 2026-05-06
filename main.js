const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText === '') {
        return;
    }

    const newTask = document.createElement('div');
    newTask.className = 'task-card';
    
    
    newTask.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <input type="checkbox" class="task-checkbox" style="width: 18px; height: 18px; cursor: pointer;">
            <span style="font-size: 16px;">${taskText}</span>
        </div>
        <button class="delete-btn">Delet</button>
    `;

    
    newTask.style.display = 'flex';
    newTask.style.justifyContent = 'space-between';
    newTask.style.alignItems = 'center';
    newTask.style.padding = '12px 16px';
    newTask.style.marginBottom = '12px'; 
    newTask.style.border = '1px solid #e7b8b8';
    newTask.style.borderRadius = '8px';
    newTask.style.backgroundColor = '#d4acac';
    
    


    
    const checkbox = newTask.querySelector('.task-checkbox');
    const taskSpan = newTask.querySelector('span');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskSpan.style.textDecoration = 'line-through';
            taskSpan.style.color = '#888';
            newTask.style.backgroundColor = '#f8d7da';
            newTask.style.boxShadow = '0 2px 4px rgba(255, 0, 0, 0.1)';
            newTask.style.cursor = 'not-allowed';
            newTask.style.left = '40%';
        } else {
            taskSpan.style.textDecoration = 'none';
            taskSpan.style.color = '#333';
        }
    });

    
    const deleteBtn = newTask.querySelector('.delete-btn');
    deleteBtn.style.padding = '6px 12px';
    deleteBtn.style.border = 'none';
    deleteBtn.style.backgroundColor = '#ff4d4f';
    deleteBtn.style.color = '#fff';
    deleteBtn.style.borderRadius = '4px';
    deleteBtn.style.cursor = 'pointer';

    deleteBtn.addEventListener('click', function() {
        newTask.remove();
    });

    taskList.appendChild(newTask);

    taskInput.value = '';
});