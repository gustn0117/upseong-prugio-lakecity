"use client";

import { useState } from "react";
import SectionBanner from "../SectionBanner";

export default function RegisterSection() {
  const [agreed, setAgreed] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    interestType: "",
    age: "",
    city: "",
    district: "",
    dong: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }
    if (!form.name || !form.phone2 || !form.phone3) {
      alert("성명과 연락처를 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          interestType: form.interestType,
          agreed: true,
        }),
      });
      const data = await res.json();
      if (data.success) {
        handleReset();
        alert("관심고객 등록이 완료되었습니다.\n담당자가 빠른 시일 내에 연락드리겠습니다.");
      } else {
        alert("등록 중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    } catch {
      alert("등록 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setAgreed(null);
    setForm({
      name: "",
      phone1: "010",
      phone2: "",
      phone3: "",
      interestType: "",
      age: "",
      city: "",
      district: "",
      dong: "",
    });
  };

  const inputClass =
    "w-full max-w-[260px] px-4 py-2.5 border border-gray-200 rounded-sm text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-gold/30 focus:border-gold transition-all duration-200";
  const selectClass =
    "px-3 py-2.5 border border-gray-200 rounded-sm text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-gold/30 focus:border-gold transition-all duration-200 appearance-none cursor-pointer";
  const radioClass =
    "w-4 h-4 text-navy focus:ring-gold/30 border-gray-300 cursor-pointer";

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="관심고객등록"
        subtitle="업성 푸르지오 레이크시티에 관심을 가져주셔서 감사합니다."
        fallbackGradient="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500"
        bgImage="/images/banner-register.jpg"
      />

      {/* Header */}
      <div className="bg-white">
        <div className="max-w-[800px] mx-auto px-6 pt-16 pb-6 text-center">
          <p className="text-gold text-[11px] font-medium tracking-[4px] uppercase mb-4">
            REGISTER
          </p>
          <h2 className="text-[26px] sm:text-[32px] font-light text-charcoal leading-snug tracking-tight">
            관심고객 사전등록
          </h2>
          <p className="mt-4 text-[14px] text-cool-gray leading-relaxed font-light">
            아래 양식을 작성하시면 담당자가 빠른 시일 내에 연락드리겠습니다.
          </p>
          <div className="w-10 h-[1px] bg-gold/40 mx-auto mt-8" />
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-10 bg-white">
        <form onSubmit={handleSubmit}>

          {/* ===== Privacy Agreement ===== */}
          <div className="rounded-sm overflow-hidden mb-10 border border-gray-200">
            <div className="bg-navy px-6 py-4 flex items-center gap-3">
              <svg className="w-4 h-4 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-white text-[14px] font-medium tracking-wide">
                개인정보 수집 및 이용 목적 등에 관한 동의
              </h3>
            </div>

            <div className="px-6 py-5 max-h-[280px] overflow-y-auto text-[12.5px] text-gray-600 leading-[1.9] space-y-4 bg-off-white">
              <p>
                DL이앤씨(이하 &quot;회사&quot;)은 고객님의 개인정보를 중요시하며, 「개인정보 보호법」 및 「정보통신망 이용촉진 및 정보보호에 관한 법률」을 준수하고 있습니다.
              </p>

              <div>
                <p className="font-semibold text-gray-800 text-[13px]">1. 개인정보 수집 및 이용에 대한 동의</p>
                <p className="mt-1">회사는 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
              </div>

              <div className="pl-3 space-y-2">
                <p><span className="text-gray-800 font-medium">(1) 수집하는 개인정보 항목</span><br />
                  - 수집항목: 이름, 연락처, 관심 유형, 연령대, 주소<br />
                  - 개인정보 수집방법: 관심고객 등록, 이벤트 응모
                </p>
                <p><span className="text-gray-800 font-medium">(2) 개인정보의 수집 및 이용 목적</span><br />
                  회사는 수집한 개인정보를 다음의 목적으로 이용합니다.<br />
                  - 본인여부 사실확인에 대한 온/오프라인 분양 마케팅 및 광고 활동에 이용<br />
                  - 마케팅 및 광고에 활용, 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속빈도 파악 또는 회원 서비스 이용에 대한 통계 및 분양정보 안내 등
                </p>
                <p><span className="text-gray-800 font-medium">(3) 개인정보의 보유 및 이용기간</span><br />
                  - 업성 푸르지오 레이크시티 분양 종료 시까지<br />
                  - 개인정보 수집 및 이용목적이 달성되거나 고객의 철회 요청이 있을 시에는 지체 없이 파기합니다.
                </p>
                <p><span className="text-gray-800 font-medium">(4) 거부할 권리</span><br />
                  고객께서는 정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, <span className="text-red-500 font-semibold">동의해야만 등록이 가능</span>합니다.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800 text-[13px]">2. 개인정보 취급 위탁에 대한 동의</p>
                <p className="mt-1">회사는 원활한 업무 수행을 위하여 고객의 개인정보를 아래와 같이 위탁하고 있습니다.</p>
              </div>

              <div className="pl-3 space-y-2">
                <p><span className="text-gray-800 font-medium">(1) 수탁업체 및 위탁 업무 내용</span></p>
                <div className="overflow-hidden rounded-sm border border-gray-200 my-2">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-3 text-left font-semibold text-gray-700 border-r border-gray-200 w-[35%]">수탁업체</th>
                        <th className="py-2 px-3 text-left font-semibold text-gray-700">위탁 업무 내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200">
                        <td className="py-2 px-3 border-r border-gray-200">분양대행사</td>
                        <td className="py-2 px-3">분양 마케팅, 고객 상담 및 관리, 관심고객 DB 관리</td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50/50">
                        <td className="py-2 px-3 border-r border-gray-200">홈페이지 운영업체</td>
                        <td className="py-2 px-3">홈페이지 운영 및 관리, 온라인 관심고객 등록 관리</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="py-2 px-3 border-r border-gray-200">문자 발송업체</td>
                        <td className="py-2 px-3">SMS/MMS 발송 서비스</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p><span className="text-gray-800 font-medium">(2) 위탁 기간</span><br />
                  - 위탁계약 종료 시 또는 개인정보의 수집·이용 목적 달성 시까지
                </p>

                <p><span className="text-gray-800 font-medium">(3) 재위탁 제한</span><br />
                  - 수탁업체는 위탁받은 업무의 목적 외로 개인정보를 처리하지 않으며, 제3자에게 재위탁하지 않습니다.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800 text-[13px]">3. 개인정보의 파기 절차 및 방법</p>
                <p className="mt-1">회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
              </div>

              <div className="pl-3 space-y-2">
                <p><span className="text-gray-800 font-medium">(1) 파기 절차</span><br />
                  - 고객이 등록한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.
                </p>
                <p><span className="text-gray-800 font-medium">(2) 파기 방법</span><br />
                  - 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각합니다.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800 text-[13px]">4. 개인정보 보호책임자</p>
              </div>

              <div className="pl-3 space-y-1.5">
                <p>
                  - 담당자: 김현주<br />
                  - 연락처: 1844-0981<br />
                  - 고객의 개인정보 관련 문의사항은 위 담당자에게 연락 주시기 바랍니다.
                </p>
              </div>
            </div>

            {/* Agreement buttons */}
            <div className="px-6 py-5 flex items-center gap-8 border-t border-gray-200 bg-white">
              <span className="text-[13px] text-cool-gray font-light hidden sm:inline">위 내용에 동의하십니까?</span>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="radio"
                    name="agreement"
                    checked={agreed === true}
                    onChange={() => setAgreed(true)}
                    className={radioClass}
                  />
                  <span className={`text-[13px] font-medium transition-colors ${agreed === true ? "text-navy" : "text-gray-600 group-hover:text-gray-900"}`}>
                    동의합니다
                  </span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="radio"
                    name="agreement"
                    checked={agreed === false}
                    onChange={() => setAgreed(false)}
                    className={radioClass}
                  />
                  <span className={`text-[13px] font-medium transition-colors ${agreed === false ? "text-red-500" : "text-gray-600 group-hover:text-gray-900"}`}>
                    동의하지 않습니다
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* ===== Personal Info ===== */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[3px] h-5 bg-gold" />
            <h3 className="text-[16px] font-semibold text-charcoal">개인정보 입력</h3>
          </div>

          <div className="rounded-sm overflow-hidden mb-10 border border-gray-200">
            <table className="w-full text-[13px]">
              <tbody>
                {/* Name */}
                <tr className="border-b border-gray-200">
                  <td className="bg-off-white px-6 py-5 font-medium text-dark-gray w-[130px] whitespace-nowrap">
                    <span className="flex items-center gap-1.5">
                      성명
                      <span className="text-red-400 text-[11px]">*</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="이름을 입력해 주세요"
                      className={inputClass}
                    />
                  </td>
                </tr>

                {/* Phone */}
                <tr className="border-b border-gray-200">
                  <td className="bg-off-white px-6 py-5 font-medium text-dark-gray whitespace-nowrap">
                    <span className="flex items-center gap-1.5">
                      연락처
                      <span className="text-red-400 text-[11px]">*</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <select
                        value={form.phone1}
                        onChange={(e) => handleChange("phone1", e.target.value)}
                        className={selectClass}
                      >
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                      <span className="text-gray-300">-</span>
                      <input
                        type="text"
                        maxLength={4}
                        value={form.phone2}
                        onChange={(e) => handleChange("phone2", e.target.value.replace(/\D/g, ""))}
                        className="w-[90px] px-4 py-2.5 border border-gray-200 rounded-sm text-[13px] text-center bg-white focus:outline-none focus:ring-1 focus:ring-gold/30 focus:border-gold transition-all duration-200"
                      />
                      <span className="text-gray-300">-</span>
                      <input
                        type="text"
                        maxLength={4}
                        value={form.phone3}
                        onChange={(e) => handleChange("phone3", e.target.value.replace(/\D/g, ""))}
                        className="w-[90px] px-4 py-2.5 border border-gray-200 rounded-sm text-[13px] text-center bg-white focus:outline-none focus:ring-1 focus:ring-gold/30 focus:border-gold transition-all duration-200"
                      />
                    </div>
                  </td>
                </tr>

                {/* Interest Type */}
                <tr className="border-b border-gray-200">
                  <td className="bg-off-white px-6 py-5 font-medium text-dark-gray whitespace-nowrap">관심유형</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap items-center gap-5">
                      {["특별공급", "1순위", "2순위"].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="interestType"
                            value={type}
                            checked={form.interestType === type}
                            onChange={(e) => handleChange("interestType", e.target.value)}
                            className={radioClass}
                          />
                          <span className={`text-[13px] transition-colors ${form.interestType === type ? "text-navy font-medium" : "text-gray-600 group-hover:text-gray-900"}`}>
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* Age */}
                <tr className="border-b border-gray-200">
                  <td className="bg-off-white px-6 py-5 font-medium text-dark-gray whitespace-nowrap">연령대</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap items-center gap-5">
                      {["20대", "30대", "40대", "50대", "60대 이상"].map((age) => (
                        <label key={age} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="age"
                            value={age}
                            checked={form.age === age}
                            onChange={(e) => handleChange("age", e.target.value)}
                            className={radioClass}
                          />
                          <span className={`text-[13px] transition-colors ${form.age === age ? "text-navy font-medium" : "text-gray-600 group-hover:text-gray-900"}`}>
                            {age}
                          </span>
                        </label>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* Address */}
                <tr>
                  <td className="bg-off-white px-6 py-5 font-medium text-dark-gray whitespace-nowrap">주소</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <select
                        value={form.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        className={selectClass}
                      >
                        <option value="">시/도 선택</option>
                        <option value="서울">서울</option>
                        <option value="경기">경기</option>
                        <option value="인천">인천</option>
                        <option value="충남">충남</option>
                        <option value="충북">충북</option>
                        <option value="대전">대전</option>
                        <option value="세종">세종</option>
                        <option value="강원">강원</option>
                        <option value="전북">전북</option>
                        <option value="전남">전남</option>
                        <option value="경북">경북</option>
                        <option value="경남">경남</option>
                        <option value="부산">부산</option>
                        <option value="대구">대구</option>
                        <option value="울산">울산</option>
                        <option value="광주">광주</option>
                        <option value="제주">제주</option>
                      </select>
                      <input
                        type="text"
                        value={form.district}
                        onChange={(e) => handleChange("district", e.target.value)}
                        placeholder="시/구/군"
                        className="w-[110px] px-4 py-2.5 border border-gray-200 rounded-sm text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-gold/30 focus:border-gold transition-all duration-200"
                      />
                      <input
                        type="text"
                        value={form.dong}
                        onChange={(e) => handleChange("dong", e.target.value)}
                        placeholder="읍/면/동"
                        className="w-[110px] px-4 py-2.5 border border-gray-200 rounded-sm text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-gold/30 focus:border-gold transition-all duration-200"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===== Buttons ===== */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-3.5 bg-navy text-white text-[14px] font-semibold tracking-wider rounded-sm hover:bg-navy-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "등록 중..." : "등록하기"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-12 py-3.5 border border-gray-200 text-cool-gray text-[14px] font-medium tracking-wider rounded-sm hover:bg-off-white hover:border-gray-300 transition-all duration-300"
            >
              다시작성
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-off-white rounded-sm border border-gray-100">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-left">
              <p className="text-[11px] text-cool-gray font-light">전화 문의</p>
              <a href="tel:1844-0981" className="text-navy font-semibold text-[20px] tracking-wider hover:text-navy-light transition-colors">
                1844-0981
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
