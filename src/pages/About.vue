<template>
  <div class="about">
    <vs-button @click="sendRequest">Send</vs-button>

    <div>
      <h1>Quamquam te quidem video minime esse deterritum.</h1>
      <h2>Quamquam te quidem video minime esse deterritum.</h2>
      <h3>Quamquam te quidem video minime esse deterritum.</h3>
      <h4>Quamquam te quidem video minime esse deterritum.</h4>
      <h5>Quamquam te quidem video minime esse deterritum.</h5>
      <h6>Quamquam te quidem video minime esse deterritum.</h6>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Themistocles quidem, cum ei Simonides an quis alius artem memoriae polliceretur, Oblivionis, inquit, mallem. <a href="http://loripsum.net/" target="_blank">Si longus, levis;</a> Duo Reges: constructio interrete. <a href="http://loripsum.net/" target="_blank">Quam nemo umquam voluptatem appellavit, appellat;</a> <a href="http://loripsum.net/" target="_blank">Maximus dolor, inquit, brevis est.</a> <a href="http://loripsum.net/" target="_blank">Traditur, inquit, ab Epicuro ratio neglegendi doloris.</a> Stoici autem, quod finem bonorum in una virtute ponunt, similes sunt illorum; Hic ego: Etsi facit hic quidem, inquam, Piso, ut vides, ea, quae praecipis, tamen mihi grata hortatio tua est. Atque haec contra Aristippum, qui eam voluptatem non modo summam, sed solam etiam ducit, quam omnes unam appellamus voluptatem. </p>

      <p>Quid de Platone aut de Democrito loquar? Alia quaedam dicent, credo, magna antiquorum esse peccata, quae ille veri investigandi cupidus nullo modo ferre potuerit. Sed emolumenta communia esse dicuntur, recte autem facta et peccata non habentur communia. Nunc omni virtuti vitium contrario nomine opponitur. <code>Contemnit enim disserendi elegantiam, confuse loquitur.</code> Ergo in iis adolescentibus bonam spem esse dicemus et magnam indolem, quos suis commodis inservituros et quicquid ipsis expediat facturos arbitrabimur? In eo enim positum est id, quod dicimus esse expetendum. <i>Quis hoc dicit?</i> </p>

      <ol>
        <li>Ego vero volo in virtute vim esse quam maximam;</li>
        <li>Quae sunt igitur communia vobis cum antiquis, iis sic utamur quasi concessis;</li>
        <li>Gerendus est mos, modo recte sentiat.</li>
        <li>Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam.</li>
      </ol>

      <h2>Non autem hoc: igitur ne illud quidem.</h2>

      <p>Et hi quidem ita non sola virtute finem bonorum contineri putant, ut rebus tamen omnibus virtutem anteponant; Sed est forma eius disciplinae, sicut fere ceterarum, triplex: una pars est naturae, disserendi altera, vivendi tertia. Quoniamque non dubium est quin in iis, quae media dicimus, sit aliud sumendum, aliud reiciendum, quicquid ita fit aut dicitur, omne officio continetur. Non dolere, inquam, istud quam vim habeat postea videro; Qualis ista philosophia est, quae non interitum afferat pravitatis, sed sit contenta mediocritate vitiorum? Itaque multi, cum in potestate essent hostium aut tyrannorum, multi in custodia, multi in exillo dolorem suum doctrinae studiis levaverunt. Id quaeris, inquam, in quo, utrum respondero, verses te huc atque illuc necesse est. <b>Hoc non est positum in nostra actione.</b> Magna laus. </p>

      <ul>
        <li>In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.</li>
        <li>Quos quidem tibi studiose et diligenter tractandos magnopere censeo.</li>
        <li>Deinde disputat, quod cuiusque generis animantium statui deceat extremum.</li>
        <li>Quae cum dixisset, finem ille.</li>
      </ul>

      <dl>
        <dt><dfn>Nulla erit controversia.</dfn></dt>
        <dd>Immo istud quidem, inquam, quo loco quidque, nisi iniquum postulo, arbitratu meo.</dd>
        <dt><dfn>Quo modo?</dfn></dt>
        <dd>Sin eam, quam Hieronymus, ne fecisset idem, ut voluptatem illam Aristippi in prima commendatione poneret.</dd>
        <dt><dfn>Numquam facies.</dfn></dt>
        <dd>Recte dicis;</dd>
        <dt><dfn>Ita prorsus, inquam;</dfn></dt>
        <dd>Quamquam te quidem video minime esse deterritum.</dd>
      </dl>

      <pre>Nam quod ait sensibus ipsis iudicari voluptatem bonum esse,
      dolorem malum, plus tribuit sensibus, quam nobis leges
      permittunt, cum privatarum litium iudices sumus.

      Vide, ne etiam menses! nisi forte eum dicis, qui, simul
      atque arripuit, interficit.
      </pre>

      <blockquote cite="http://loripsum.net">
        Atque ego: Scis me, inquam, istud idem sentire, Piso, sed a te opportune facta mentio est.
      </blockquote>

    </div>
    <div class="text-center">
      <h1 class="mb-8 text-xl font-thin">This is an about page</h1>
      <HelloWorld></HelloWorld>
      <router-link tag="button" to="/" class="mt-8 px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded text-xs uppercase font-bold">Go to Home page</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from '../utils/config';

import HelloWorld from '@/components/HelloWorld';

export default {
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  methods: {
    async sendRequest() {
      const res = await axios.get('api/test');
      console.log('res', res);
    }
  }
};
</script>
