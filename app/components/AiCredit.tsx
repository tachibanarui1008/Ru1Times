import type { AiCredit as AiCreditData } from "../report-types";

export function AiCredit({ credit }: { credit: AiCreditData }) {
  return <aside className="ai-credit" aria-label="AI 协作署名">
    <span>EDITORIAL COLLABORATION</span>
    <p>本期由橘瑠衣主编，与 <strong>{credit.provider} {credit.model}</strong> 协作完成。</p>
    <small>模型参与：{credit.role}。内容取舍、观点表达与最终责任由作者承担。</small>
  </aside>;
}
