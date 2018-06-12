import Developer from './dev';
import displayDate from './data'

const dev = new Developer('Alexandr', 'Petrov');
dev.showInfo();

document.getElementById('btn_data').onclick = displayDate();//почему обработчик срабатывает сразу?