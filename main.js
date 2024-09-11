import { VK, API, resolveResource } from 'vk-io';
import 'dotenv/config'
const senderUserId=210424205;

const api = new API({ 
	token:process.env.TOKEN});
const vk = new VK({
	token:process.env.TOKEN});

(async () => {
    

    // Отправляем сообщение
    vk.updates.on('message_new', async (context) => {
              
          // Определяем отправителя
        switch(context.senderId) {
            case senderUserId:
                switch(context.text.toLowerCase()) {
                    case 'м ж':
                        await context.deleteMessage(context.conversationMessageId);
                        await context.send('моя жаба');
                        break;
                    case 'ж и':
                        await context.send('жаба инфо');
                        await context.deleteMessage(context.conversationMessageId);
                        break;
                    case 'грабитель':
                        await context.send('работа грабитель');
                        await context.deleteMessage(context.conversationMessageId);
                        break;
                    case 'арена':
                        await context.send('на арену');
                        await context.deleteMessage(context.conversationMessageId);
                        break;
                    case 'столовая':
                            await context.send('поход в столовую');
                            await context.deleteMessage(context.conversationMessageId);
                            break;
                    case 'крупье':
                        await context.send('работа крупье');
                        await context.deleteMessage(context.conversationMessageId);
                        break;
                    case 'шорткаты':
                        await context.send('шорткаты сделаны по первым буквам команды , примеры:  ж и - жаба инфо, м ж-моя жаба; либо название рода деятельности:\n арена - на арену, грабитель - работа грабителем и т.д.\nПисать их можно в любом регистре');
                        break;
                    default:
                        return;
                    }
            default:
                console.log(`${context.senderId} не хост бота и/или написал не шорткат, пропускаю его сообщение`);
                break;
        }
        });
    
    await vk.updates.start();
})();


