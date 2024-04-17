/**
 * За допомогою рефа зробіть так, щоб при кліку по кнопці
 * сторінка скролилась до форми
 *
 * - getBoundingClientRect
 * - scrollTo
 */

import { useRef } from "react";

const formStyles = {
  display: "grid",
  width: 320,
  gap: 8,
  padding: 8,
  border: "1px solid black",
};

export default function RefExample() {
  const formRef = useRef();

  const handleScroll = () => {
    const form = formRef.current;
    const dims = form.getBoundingClientRect();
    window.scrollTo({
      top: dims.top,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <button onClick={handleScroll}>Schedule a coaching session</button>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          ipsum. Inventore quae, dicta similique voluptatum ullam ad provident
          molestiae eos! Itaque cupiditate similique labore tenetur distinctio
          delectus earum, accusantium incidunt maxime nostrum voluptates
          suscipit natus at et dicta illum eaque reiciendis. Dolore nobis
          quibusdam provident vero magnam commodi aut tempore reprehenderit
          alias, mollitia, laborum quasi qui tempora blanditiis minus iste
          aliquam soluta voluptatibus incidunt eveniet! Eveniet quos sint
          doloremque nemo! Laborum rerum voluptatem reprehenderit ea quae at,
          omnis provident unde, velit error nobis veniam distinctio excepturi
          nesciunt quia! Fugit, praesentium ab vero deleniti debitis, non
          dolorum officia ea modi cum provident architecto aspernatur
          laudantium, est aut reprehenderit enim nobis! Accusantium
          exercitationem magnam culpa repellat sunt rem eum, et pariatur illum
          debitis expedita ducimus optio iste non minima dolor. Tempore voluptas
          itaque voluptates commodi numquam distinctio. Eligendi animi
          repudiandae fuga doloremque veniam officia deleniti distinctio
          incidunt reprehenderit quibusdam repellat, consequatur porro mollitia,
          error quia possimus ipsa harum quae velit dolores optio. Ipsum id
          vitae veniam eaque consequuntur doloremque sint pariatur ducimus
          quidem, dignissimos nam eos dolor non laborum assumenda numquam dicta,
          esse aperiam at odit. Nihil consequuntur nulla doloremque, ipsum autem
          aperiam saepe, minus magni, minima ea quod sint explicabo. Soluta,
          corrupti? Repudiandae tempora aperiam libero exercitationem, in
          nostrum quae incidunt nam tenetur rem neque mollitia voluptate,
          deserunt, illo dolor quasi eum voluptatum alias ea et nisi ex!
          Inventore eveniet ducimus eum voluptatum expedita quaerat esse qui
          culpa rerum! Facilis maiores, neque ea, beatae accusamus quos quo in,
          maxime provident sint officia voluptatum recusandae optio asperiores
          omnis ratione cumque enim qui quibusdam molestias non porro. Sed amet
          vitae veniam, voluptas at quae sapiente nihil repellat voluptate
          aliquid doloribus saepe atque itaque quo! Iure consequuntur earum
          voluptatem culpa officiis, tempore incidunt necessitatibus sequi sunt?
          Quia provident neque, ad vero molestias, soluta similique labore iste
          quis earum dolor impedit autem accusantium mollitia amet libero at
          ipsam deleniti beatae quidem ratione hic nihil vel. Quod, magni nam?
          Neque, distinctio quam. Illo maxime porro qui quo eaque voluptates,
          quasi ducimus cumque earum dicta! Deleniti iusto, dolore cum soluta
          nihil non. Blanditiis accusantium veniam sint quos, odio, aliquam
          molestiae dolorem, eaque ad aperiam voluptate tempora enim? Magni
          magnam ipsam dolores nobis consequatur distinctio ipsum id.
          Perspiciatis voluptas a debitis cum cupiditate incidunt repellendus
          suscipit voluptatum quod doloremque accusamus dolor nemo soluta
          exercitationem quibusdam distinctio, placeat aperiam eos excepturi
          sunt! Numquam at nobis quia sunt, dolor amet recusandae eos, labore
          voluptatibus sed ipsam consectetur? Eum amet atque eaque quis, nobis
          nisi vel tenetur ipsum natus nesciunt maxime tempore. Eligendi illum,
          quas magni excepturi cum et voluptas repudiandae dignissimos ipsam
          fuga esse inventore! Ipsa facilis velit qui quibusdam perferendis?
          Asperiores modi iusto exercitationem facere esse cupiditate unde
          aliquid adipisci veritatis voluptatem culpa, alias corrupti porro
          nostrum aliquam laudantium. Dicta perspiciatis cumque aut, quisquam
          numquam suscipit architecto totam consequuntur perferendis ea dolor
          deserunt culpa, nisi at eos quo esse voluptas accusamus, quam ullam id
          fugit iste saepe! Voluptates nisi at voluptas tempore assumenda atque
          ipsam error itaque possimus? Cupiditate.
        </p>
        <p>
          Quod quos aspernatur ea quidem ipsum repellat, accusamus quam nam sed
          amet possimus tempora adipisci ab nihil odit ut repellendus at maiores
          quo quibusdam ipsa temporibus optio. Eos pariatur cupiditate sint
          dolor aliquid quasi cumque, saepe est maxime obcaecati amet veritatis
          assumenda nam vitae et voluptas eligendi explicabo tempore
          reprehenderit asperiores. Exercitationem necessitatibus voluptatibus
          dicta unde? Asperiores, architecto non impedit laudantium quos
          molestias qui, eius aspernatur voluptatum ipsam quas sed, nostrum
          corrupti praesentium doloremque optio inventore harum ducimus at. Esse
          vero magni non commodi saepe quasi accusamus eos, laudantium atque
          officiis beatae fugit, mollitia ratione obcaecati tempora delectus
          excepturi nam veritatis distinctio assumenda culpa maiores aspernatur
          unde vel! Voluptatibus numquam laboriosam officiis, vel eum id, saepe
          tempore aperiam a facere unde sapiente neque recusandae dolores
          corrupti. Nulla, totam? Vel consectetur a reiciendis aperiam voluptate
          eligendi fugit incidunt ducimus eius ipsa eveniet, facere ratione
          molestias. Voluptates dicta ut reprehenderit aut, sit ipsum corrupti!
          Soluta velit rem corrupti repudiandae, officia in, hic molestias quam
          qui maiores eligendi iure similique? Unde nesciunt illo at, voluptate
          animi ipsa? Libero dicta porro ex commodi, dolorum quaerat nam. Illum
          exercitationem laborum architecto vitae? Totam aperiam veritatis
          deleniti rem, obcaecati, dolor facere soluta dolorum laborum quod quae
          iure doloribus porro eum earum reprehenderit expedita excepturi,
          labore asperiores laudantium? Doloremque fugiat saepe temporibus
          sapiente ad praesentium accusamus quibusdam, maiores, ipsum voluptates
          distinctio soluta dolore placeat suscipit incidunt odio unde
          voluptatum magni consequatur? Quasi recusandae eos nihil dolorum
          aspernatur eius, quod culpa non doloremque velit animi dignissimos,
          explicabo fuga exercitationem veniam soluta eligendi voluptas harum
          totam, numquam quidem rem nobis! Reiciendis aliquam tempore vitae
          temporibus odit quam quidem similique, dolore iste! Velit, officia
          provident labore reiciendis voluptatem nihil repellendus, sed qui
          deserunt harum quo perspiciatis, cupiditate maxime fuga nulla
          voluptatum. Atque vero possimus mollitia porro vel soluta, error
          voluptatum velit distinctio debitis similique dolore, iste officia
          dicta fugit consequatur repellendus quibusdam iure voluptatem quod
          voluptas rerum ab, reprehenderit quos. Fuga provident consequatur
          tempora impedit, reprehenderit laborum iste neque, doloribus magni
          quia facere architecto libero consequuntur ex! Sapiente, sit, facere
          magni hic aliquam temporibus alias ut doloremque iste perspiciatis
          eaque quod dolorem nihil tenetur, quaerat debitis! Esse sed, provident
          repellat iure aspernatur non inventore porro officiis debitis. Beatae
          consequuntur, ea odio ratione labore dolore expedita eaque illo
          ducimus temporibus ullam culpa exercitationem sed aliquid nihil.
          Exercitationem, laborum et minus repellat nihil nam ipsum voluptate
          modi explicabo, quos, consectetur voluptas repellendus qui molestiae?
          Sequi neque, voluptas reiciendis optio repellendus qui laudantium
          dignissimos veritatis consequuntur? Sequi iste ducimus voluptatibus
          sint magnam eos, culpa aliquam quod officiis esse nostrum voluptatum
          dolorem cupiditate inventore, assumenda voluptate, nihil excepturi
          quaerat voluptas ratione quam quisquam. Consequatur vero quo ut minus
          quidem voluptatum ducimus omnis molestiae enim dolorum quibusdam,
          facere quos, tempora provident? Esse porro, earum nostrum libero quod
          harum reprehenderit! Aperiam aliquam, commodi ipsam culpa doloribus
          autem officia fugiat placeat, expedita animi ducimus illum, temporibus
          eos? Facilis vitae error consectetur, laudantium commodi dicta
          temporibus ullam esse reprehenderit placeat laborum repellat molestias
          exercitationem. Cupiditate culpa quia quisquam?
        </p>
        <p>
          Enim debitis quas veniam quibusdam explicabo mollitia magni saepe
          facere placeat, minus voluptatum repellat reiciendis eum nulla
          eligendi amet quisquam porro ipsa fugiat odio modi fuga dolorem!
          Dolorum minus cum consequuntur assumenda perferendis corrupti a sed
          eligendi laudantium. Quia excepturi molestias dolorem consequuntur
          totam, officiis exercitationem harum impedit mollitia reiciendis
          blanditiis beatae, voluptas optio cumque. Temporibus quibusdam cum
          voluptatibus minima quidem deleniti natus voluptates veritatis
          nesciunt et impedit, a illo eos odio molestias consequatur consectetur
          iste quasi. Velit nihil perspiciatis voluptates deserunt dolorem, nemo
          quidem id hic aliquam cumque impedit quaerat nisi doloremque aliquid
          eos similique culpa eligendi quibusdam obcaecati eius! Enim quidem
          numquam ipsa facere modi, repellat hic nemo at rem dolorem ratione
          commodi, libero perferendis doloremque aliquid pariatur molestias quam
          sequi sed vero? Consequuntur nam blanditiis deserunt tempore hic a
          illo architecto, repudiandae in dolor quidem molestiae, amet, vitae
          alias quibusdam similique labore! Adipisci ut magnam temporibus, saepe
          hic obcaecati autem voluptate odit repellat placeat? Omnis in
          consectetur aliquid iure amet quis ducimus nemo quaerat veritatis quod
          praesentium adipisci nostrum hic fugiat natus, corporis possimus!
          Voluptatibus voluptates suscipit laborum harum, dignissimos dicta
          pariatur quia aperiam accusantium quaerat eos consequuntur numquam ex
          fugiat? Illum, libero perferendis. Tenetur distinctio, nobis,
          laboriosam illum repellat tempora deleniti tempore voluptatem minima
          voluptatibus vero facilis quos culpa rem nisi saepe. Nihil quis
          deleniti, consequuntur voluptatem cum architecto! Aperiam, magni
          deleniti. Nulla ad at obcaecati laborum officiis quod repellendus
          dolore, aperiam praesentium velit excepturi molestiae quam assumenda
          expedita deleniti fugiat ducimus quos tempora, magni quasi quidem
          inventore! Placeat sit deleniti itaque. Assumenda, cupiditate iure
          perspiciatis nihil, nesciunt non aliquam quibusdam molestias magnam
          inventore tempore quidem. Voluptatum nobis quo quisquam nostrum itaque
          cupiditate molestiae recusandae nisi minus facere eius aspernatur, est
          culpa a. Asperiores, ipsum explicabo. Accusamus odio obcaecati quasi
          voluptas temporibus facere aliquid illum culpa ratione aut deleniti
          minus voluptatum doloribus nisi, id inventore. Delectus, iure?
          Ducimus, eos dolor. Nisi aliquam dolores, similique veritatis enim
          nihil architecto fuga inventore, mollitia eos hic facere. Sapiente
          vero, atque recusandae voluptatem eum omnis nemo eaque minus quidem
          sequi. Fuga, harum dolorum quibusdam animi quos commodi accusantium
          assumenda voluptas facilis consectetur quasi ut? Rem voluptatibus
          delectus quos, voluptatum aliquid veniam totam porro ex recusandae
          laborum a architecto aliquam doloremque odio explicabo, ullam maiores
          inventore eligendi sit, quae earum harum enim animi. Explicabo veniam
          delectus eaque culpa, non sed illum deleniti expedita cum dolores
          incidunt ut iste maxime necessitatibus et modi, ad autem sequi ducimus
          eveniet. Eos ipsum, voluptates eaque sint dolor et aspernatur quo sed
          obcaecati iste consectetur accusantium eveniet excepturi? Nobis enim
          aliquid deserunt dignissimos commodi maiores iusto, exercitationem
          quas, corporis ipsum qui, debitis magnam ex illo laborum fuga unde.
          Magnam, ex? Veritatis aliquam enim necessitatibus pariatur, fugit quod
          ullam, nihil, ipsam commodi ipsum blanditiis eum? Voluptates, nulla
          dolores accusantium quis sequi excepturi expedita! Ex placeat ducimus
          nulla commodi corrupti voluptate natus nostrum assumenda tempora
          architecto id sint laboriosam sapiente minus numquam, perferendis
          exercitationem excepturi nemo. Hic pariatur maxime sed voluptate quod
          soluta assumenda, blanditiis dolor qui nihil?
        </p>
        <p>
          Fugiat temporibus perferendis repellat ducimus, odio id adipisci
          doloremque veniam? Repellat molestiae sunt, consectetur impedit illo,
          minus veritatis voluptatum harum deserunt officia tempore quas
          aspernatur est nulla sequi ad adipisci cupiditate perferendis non
          ratione ea et. Veritatis fugiat a iure animi asperiores reiciendis,
          earum fuga quas dolorum, aliquid, non pariatur doloremque incidunt. At
          temporibus consequatur fugit, numquam aspernatur harum eius ipsam
          omnis fugiat accusamus odit, amet optio doloremque. Itaque dolor
          eveniet ipsam eius expedita officiis sunt repellat accusantium.
          Consequatur molestias exercitationem, facere reprehenderit dignissimos
          labore quo, maiores dolores reiciendis facilis magni in at deleniti
          soluta obcaecati sed ratione quibusdam perferendis, voluptatibus
          laborum doloribus explicabo ullam laudantium harum? Dolores saepe
          perspiciatis unde nobis modi quidem, quae deserunt vero, sed minima
          repellendus explicabo laboriosam necessitatibus, cupiditate
          distinctio? Labore ut adipisci ullam libero nobis reprehenderit quae
          officiis aliquam, provident optio dolore cumque culpa repellendus et
          a. Maxime et doloribus impedit? Repellendus pariatur quasi recusandae,
          a quae minus corrupti facere tenetur molestias, provident natus
          explicabo quod quidem illo ratione, soluta sapiente fugiat
          consequuntur expedita? At repellat repellendus esse omnis odio libero
          tempora deleniti sapiente optio quaerat enim sint fugiat nostrum
          voluptates, amet aliquam, rem quam, obcaecati animi? Architecto
          voluptatum deserunt culpa veniam fugit sequi, voluptatibus perferendis
          alias sapiente! Neque dignissimos error est illum doloremque ducimus
          fuga delectus quasi ea rerum, in asperiores ad atque exercitationem
          reiciendis, quisquam ut similique possimus quaerat iure tempora cum,
          maxime fugiat? Et, explicabo quis! Sint, a nemo. Eaque ullam quia et
          recusandae dolor ratione temporibus optio quas non! Labore, explicabo
          repudiandae consectetur facilis corrupti cumque culpa nostrum libero
          recusandae voluptas natus exercitationem. Temporibus, quos ipsum?
          Repellat cupiditate delectus fugit non provident voluptate, qui
          ducimus est adipisci enim quod magni molestias itaque ratione, odit,
          quisquam quae magnam optio nam eos expedita illo a maiores.
          Praesentium exercitationem expedita ipsam nisi, debitis incidunt
          accusantium repudiandae dolore fuga possimus quisquam, beatae cumque
          molestiae consectetur repellat minima? Veniam amet explicabo, nostrum
          asperiores obcaecati quis dolores, magni minima non quo a numquam
          ipsum quam officiis voluptatum necessitatibus libero. Eius ullam rem
          in, quod repudiandae assumenda. Explicabo quod officia beatae qui,
          omnis reiciendis dolorem nesciunt molestiae cumque laudantium sit
          veniam, officiis voluptatem ullam perferendis praesentium impedit?
          Laudantium libero dolor sit laboriosam sequi. Consequuntur maiores
          mollitia hic impedit, magni dolorum, sequi exercitationem possimus
          earum asperiores laudantium fugit dicta, officiis dolores ipsam eos
          molestiae esse. Odit soluta cum expedita architecto neque
          exercitationem labore nesciunt cupiditate sed doloribus, atque,
          reprehenderit, voluptatum quia iure perferendis! Obcaecati, enim,
          architecto sit iste asperiores laudantium provident voluptates aut eum
          vero ullam? Magnam similique accusamus doloribus quae blanditiis
          repellat distinctio rem mollitia nisi commodi molestias, voluptas
          quibusdam ab minima error ipsum, harum iusto. Aliquid rerum voluptatum
          iste, laboriosam dolores possimus dicta. Modi perferendis vero atque
          doloremque unde facilis repellat, enim quam! Veniam, quos dolorum quo
          explicabo repudiandae, illum in aspernatur id ratione ab possimus
          nemo. Est doloremque eaque optio natus aliquam. Odit dolorum voluptate
          ab non quia ad officia. Facilis explicabo in error totam doloremque
          magni eaque molestiae alias beatae? Accusamus atque quidem a.
        </p>
        <p>
          Sunt quae maxime, explicabo sit facilis architecto qui numquam sequi
          animi facere consequuntur dicta. Consequuntur accusamus maiores
          necessitatibus magnam, consequatur iusto laudantium nihil. Atque,
          alias ipsam fugiat quibusdam numquam est rem veniam eius harum
          placeat, distinctio molestiae similique provident dolorem, nisi
          consequuntur blanditiis quae hic quaerat libero adipisci aliquam
          quisquam impedit pariatur! Vero obcaecati excepturi quis magnam iure?
          Cumque eaque unde magni sequi, consequatur incidunt autem consequuntur
          repellat illum nulla maxime, eligendi eum quaerat nihil distinctio ut
          vero, dolores veniam corporis ipsum tempora beatae deserunt.
          Perspiciatis eligendi saepe, nulla autem, pariatur facere aut corrupti
          nihil incidunt nisi eos neque vitae tenetur tempore obcaecati nam
          asperiores quisquam! Magnam sit veniam qui id libero facilis culpa
          illo? Veniam repellat ut vel amet mollitia ad quisquam, non optio
          quidem est dolor illum quam accusantium a at ipsa iste ex similique
          odio quas, eius ipsam architecto incidunt. Pariatur nam voluptate hic
          laudantium illo quam dolores optio sint, assumenda libero mollitia
          quis ea ipsum nobis quae alias iure maiores exercitationem esse quo
          consectetur eum autem. Adipisci perspiciatis earum quo minima
          blanditiis doloremque ducimus illum. Culpa necessitatibus voluptatibus
          id eligendi rem, fugit natus fuga. Modi, libero veniam commodi nulla
          ipsum ab, saepe nesciunt suscipit itaque facilis ex dolore aut amet
          molestiae dolorem. Fugit aspernatur saepe velit necessitatibus eaque
          at incidunt a repellendus dolorum hic dolorem ex, pariatur eligendi
          nihil deserunt? Quos soluta, odio debitis earum laboriosam possimus
          iste illum quo neque veritatis minus amet molestias inventore
          incidunt. Recusandae eligendi rem nemo totam nulla culpa maxime quos
          quasi veniam modi amet consequatur reiciendis officiis quidem
          excepturi quod explicabo, molestiae temporibus autem. Mollitia iusto
          ut rerum error inventore, delectus ducimus nihil minus fugiat corrupti
          excepturi repudiandae obcaecati similique, ad veritatis repellendus
          voluptatem numquam voluptate vero unde? Maxime expedita molestias
          praesentium enim porro quam, harum obcaecati quo officiis mollitia
          excepturi optio sed reprehenderit voluptate officia esse saepe vel
          error fugiat eius dolores distinctio ab. Sed autem, atque maxime at
          iste, fugit quam sunt accusamus eligendi consequuntur incidunt cum
          quas adipisci ex veniam dicta, perspiciatis modi ad blanditiis
          pariatur dolores ipsum quae facere. Soluta tempore sed deserunt
          dolores, sapiente aperiam obcaecati magnam architecto quos, assumenda
          dolorem at exercitationem amet! Dolorum iure error pariatur
          exercitationem, non vitae dolorem corporis velit ipsa, ipsam corrupti
          commodi libero quod tempora, iusto provident. Nostrum blanditiis modi,
          quo nulla aspernatur odio accusamus ratione ullam! Asperiores, quod
          beatae aperiam ducimus mollitia adipisci ipsa rem itaque! Eligendi
          totam id nesciunt modi esse. Impedit ipsa culpa tempora, nisi amet
          architecto voluptatum dolores maiores possimus quis eius dolor animi
          necessitatibus praesentium neque nesciunt pariatur dolorem aspernatur
          quidem! Inventore architecto rem vero culpa impedit quia excepturi
          quaerat, voluptas at, amet expedita, pariatur alias necessitatibus
          temporibus cumque perferendis dignissimos. Impedit recusandae quaerat,
          iure architecto dignissimos, aut provident id in dolorem eveniet nemo
          fugiat suscipit eius. Ab laboriosam, at eveniet quo in nostrum
          adipisci omnis nulla error nisi, iusto itaque. Adipisci, aperiam
          reprehenderit esse corporis, autem at, consectetur est numquam
          voluptatum explicabo perferendis quibusdam debitis eaque officiis
          architecto. Nihil repudiandae illum odio provident?
        </p>
      </div>

      <form ref={formRef} style={formStyles}>
        <input type="email" placeholder="Your email" />
        <button>Schedule now</button>
      </form>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          ratione cum obcaecati excepturi deserunt ab fuga iusto voluptatibus
          molestias deleniti, sequi hic fugiat enim atque itaque? Nemo
          dignissimos dolorum libero hic, magni quod voluptate provident sequi
          sapiente suscipit pariatur! Reiciendis, possimus autem ratione beatae
          tempore amet quidem consequuntur recusandae dolore dignissimos, at
          saepe vel sit unde tempora excepturi repellendus nisi? Neque optio
          impedit reiciendis? Animi, maiores! Consequatur recusandae aspernatur
          praesentium aut mollitia, reprehenderit facilis voluptas aperiam
          repellendus ducimus doloribus. Temporibus ab ratione molestias aut.
          Minus numquam suscipit quibusdam ex aliquid, pariatur, provident
          eveniet similique voluptas deserunt placeat eum iste neque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          ratione cum obcaecati excepturi deserunt ab fuga iusto voluptatibus
          molestias deleniti, sequi hic fugiat enim atque itaque? Nemo
          dignissimos dolorum libero hic, magni quod voluptate provident sequi
          sapiente suscipit pariatur! Reiciendis, possimus autem ratione beatae
          tempore amet quidem consequuntur recusandae dolore dignissimos, at
          saepe vel sit unde tempora excepturi repellendus nisi? Neque optio
          impedit reiciendis? Animi, maiores! Consequatur recusandae aspernatur
          praesentium aut mollitia, reprehenderit facilis voluptas aperiam
          repellendus ducimus doloribus. Temporibus ab ratione molestias aut.
          Minus numquam suscipit quibusdam ex aliquid, pariatur, provident
          eveniet similique voluptas deserunt placeat eum iste neque?
        </p>
      </div>
    </>
  );
}
