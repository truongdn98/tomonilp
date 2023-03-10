<template>
  <Page title="Dịch vụ" subtitle="Services">
    <p class="key">弊社が手がけた実績の一部をご紹介します。</p>
    <ul class="work__example-list">
      <li class="work__example-item">
        <div class="work__example-item-inner">
          <h4>
            月間広告費<span class="case-item-top">月間広告費39％削減</span
            >＆<span class="case-item-top">昨対売上170％</span>
          </h4>
          <div class="work__example-item-body">
            <div class="work__example-item-img">
              <img
                src="https://grooveinc.jp/wp-content/themes/groove/assets/img/works/siroca.png"
              />
            </div>
            <div class="work__example-item-desc-wrap">
              <p>シロカ株式会社 様</p>
              <p>カテゴリ：ホーム＆キッチン</p>
              <p>課題：①広告費用の圧迫 ②ブランドシェア率の低迷</p>
              <p>
                対策：①社内独自ツールによる広告キーワードの分析<br />
                ②消費者インサイトを考慮した商品ページ改善
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="work__example-item">
        <div class="work__example-item-inner">
          <h4>
            CTR<span class="case-item-top">2.4</span>倍CVR<span
              class="case-item-top"
              >1.5</span
            >倍&amp;カテゴリ別<span class="case-item-top">販売数１位獲得</span>
          </h4>
          <div class="work__example-item-body">
            <div class="work__example-item-img">
              <img
                src="https://grooveinc.jp/wp-content/themes/groove/assets/img/works/sweet.png"
              />
            </div>
            <div class="work__example-item-desc-wrap">
              <p>株式会社スウィートマミー 様</p>
              <p>カテゴリ：ベビー＆マタニティ</p>
              <p>課題：①中国企業の参入 ②昨対売上およびブランドシェア率の低下</p>
              <p>
                対策：①低単価商材との差別化戦略の策定および実施<br />
                ②消費者インサイトを考慮した商品ページ改善
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="work__example-item">
        <div class="work__example-item-inner">
          <h4>
            ２ヶ月連続<span class="case-item-top">売上２倍成長</span>、<span
              class="case-item-top"
              >ベストセラー獲得</span
            >
          </h4>
          <div class="work__example-item-body">
            <div class="work__example-item-img">
              <img
                src="https://grooveinc.jp/wp-content/themes/groove/assets/img/works/base.png"
              />
            </div>
            <div class="work__example-item-desc-wrap">
              <p>ベースフード株式会社 様</p>
              <p>カテゴリ：食品・飲料・お酒</p>
              <p>課題：①ECの早期立上げ ②専門性の高い運用ノウハウ</p>
              <p>
                対策：①社内独自ツールによる広告キーワードの分析<br />
                ②消費者インサイトを考慮した商品ページ改善
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <section class="end">
      <p>
        その他<span>100ブランド以上の実績</span>があります。<br />
        まずは専門スタッフに無料でご相談下さい。<br />
        その際に様々な事例をお話することが可能です。<br />
        また、貴社の状況をお話頂ければ、<br />
        今までの事例から貴社の成功に<br
          class="sp"
        />貢献できるご提案を致します。
      </p>
    </section>
  </Page>
</template>

<script lang="ts">
import Page from "../../components/Page.vue";
export default {
  name: "achivements-view",
  components: {
    Page,
  },
};
</script>
