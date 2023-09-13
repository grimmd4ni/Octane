
import React from 'react'
import Octane from '../img/images/octane.png'

function Character(){

return(
<section className="character">
    <figure className="character-img">
        <img src={Octane} alt="Сharacter look full height"/>
        <figcaption>
            “Актуальная внешность персонажа”
        </figcaption>
    </figure>
    <article className="character-info">
        <header className="character-header">
            <h2>Octane</h2>
            <h3>Leyenda veloz</h3>
        </header>
        <section>
            <p className="character-desc">
                Знакомьтесь - это Октейн, <mark>самый быстрый человек на фронтире.</mark>
                Пришел в игры Апекс за острыми ощущениями и показать себя. По праву считается самой
                экстремальной
                легендой и вот почему...
            </p>
            <details className="chracter-desc-extended">
                <summary>Подробнее</summary>
                В один прекрасный день Октавио Сильва заскучал. Впрочем, скука — его нормальное состояние. Сынок
                вечно занятого директора корпорации «Сильва Фармасьютикалс», золотой мальчик, у которого было
                все, что только можно пожелать... Единственным занятием, которое хоть как-то развлекало его,
                было исполнение все более рискованных трюков и съемка головидео для восхищенных фанатов. И в
                этот самый день он вознамерился преодолеть полосу препятствий за рекордное время, перебросив
                себя через финишную черту... взрывом гранаты.

                Позже, уже в приемном отделении, врачи сообщили, что спасти его ноги невозможно. Лихим денькам
                сорвиголовы пришел бесславный конец. Октавио такой расклад не понравился, и он обратился за
                помощью к старой подруге. Его манипуляции с чувством вины достигли цели: Аджей Че создала для
                него бионические протезы. Едва научившись ходить на новых ногах, которые теперь можно было
                запросто подлатать после любых повреждений, Октавио решил, что карьера каскадера — слишком
                ничтожное поприще. Игры Apex, настоящий рай для охотников за адреналином, выглядели куда
                заманчивей. Теперь он намерен использовать свои умопомрачительные трюки для того, чтобы стать
                чемпионом Apex — и бросить очередной вызов смерти. Может быть, хотя бы на арене ему не будет
                скучно.
            </details>
        </section>
        <footer>
            <p>добавлен в игру <time datetime="2019-04-12">12 апреля 2019 года</time> </p>
        </footer>
    </article>
    <aside className="character-additional">
        <ul className="additional-content">
            <li className="additional-item"><span>Настоящее имя:</span> Октавио Сильва</li>
            <li className="additional-item"><span>Возраст:</span> 24</li>
            <li className="additional-item"><span>Родной мир:</span> Псамат</li>
            <li className="additional-item"><span>Тактическое умение:</span> Ускорение</li>
            <li className="additional-item"><span>Пассивное умение:</span> Регенерация</li>
            <li className="additional-item"><span>Ультимейт:</span> Батут</li>
        </ul>
    </aside>
</section>
)

}

export default Character