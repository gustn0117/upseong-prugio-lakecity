"use client";

import { useState } from "react";
import SectionBanner from "../SectionBanner";

export default function RegisterSection() {
  const [agreed, setAgreed] = useState<boolean | null>(null);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }
    if (!form.name || !form.phone2 || !form.phone3) {
      alert("성명과 연락처를 입력해 주세요.");
      return;
    }
    alert("관심고객 등록이 완료되었습니다.\n담당자가 빠른 시일 내에 연락드리겠습니다.");
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

  return (
    <section className="pt-[80px]">
      <SectionBanner
        title="관심고객등록"
        subtitle="엘리프 성성호수공원에 관심을 가져주셔서 감사합니다."
        fallbackGradient="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700"
      />

      <div className="max-w-[750px] mx-auto px-6 py-14">
        <form onSubmit={handleSubmit}>

          {/* ===== 개인정보 수집 동의 ===== */}
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-10">
            <div className="bg-elif-green px-5 py-3">
              <h3 className="text-white text-[14px] font-bold tracking-wide">
                개인정보 수집 및 이용 목적 등에 관한 동의
              </h3>
            </div>
            <div className="px-5 py-4 max-h-[260px] overflow-y-auto text-[12.5px] text-gray-600 leading-[1.9] space-y-3 bg-gray-50/50">
              <p>
                계룡건설(이하 &quot;회사&quot;)은 고객님의 개인정보를 중요시하며, 정보통신망 이용촉진 및 정보보호에 관한 법률을 준수하고 있습니다.
              </p>

              <div>
                <p className="font-semibold text-gray-800">1. 개인정보 수집 및 이용에 대한 동의</p>
                <p className="mt-1">회사는 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
              </div>

              <div className="pl-3 space-y-1.5">
                <p><span className="text-gray-800">(1) 수집하는 개인정보 항목</span><br />
                  - 수집항목: 이름, 연락처, 관심 유형, 연령대, 주소<br />
                  - 개인정보 수집방법: 관심고객 등록, 이벤트 응모
                </p>
                <p><span className="text-gray-800">(2) 개인정보의 수집 및 이용 목적</span><br />
                  회사는 수집한 개인정보를 다음의 목적으로 이용합니다.<br />
                  - 회사는 본인여부 사실확인에 대한 온/오프라인 분양 마케팅 및 광고 활동에 이용<br />
                  - 마케팅 및 광고에 활용, 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속빈도 파악 또는 회원 서비스 이용에 대한 통계 및 분양정보 안내 등
                </p>
                <p><span className="text-gray-800">(3) 개인정보의 보유 및 이용기간</span><br />
                  - 엘리프 성성 호수공원 분양 종료시까지<br />
                  - 개인정보 수집 및 이용목적이 달성되거나 고객의 철회 요청이 있을 시에는 지체 없이 파기합니다.
                </p>
                <p><span className="text-gray-800">(4) 거부할 권리</span><br />
                  고객에서는 정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, <span className="text-red-500 font-semibold">동의 해야만 등록이 가능</span>합니다.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">2. 개인정보 취급 위탁에 대한 동의</p>
              </div>
            </div>

            {/* 동의 선택 */}
            <div className="px-5 py-4 flex items-center gap-6 border-t border-gray-200 bg-white">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agreement"
                  checked={agreed === true}
                  onChange={() => setAgreed(true)}
                  className="w-4 h-4 text-elif-green focus:ring-elif-lake/30 border-gray-300"
                />
                <span className="text-[13px] text-gray-700 font-medium">동의</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agreement"
                  checked={agreed === false}
                  onChange={() => setAgreed(false)}
                  className="w-4 h-4 text-elif-green focus:ring-elif-lake/30 border-gray-300"
                />
                <span className="text-[13px] text-gray-700 font-medium">동의하지 않음</span>
              </label>
            </div>
          </div>

          {/* ===== 개인정보 입력 ===== */}
          <h3 className="text-[16px] font-bold text-gray-900 mb-6">개인정보 입력</h3>

          <div className="border border-gray-200 rounded-lg overflow-hidden mb-10">
            <table className="w-full text-[13px]">
              <tbody>
                {/* 성명 */}
                <tr className="border-b border-gray-200">
                  <td className="bg-gray-50 px-5 py-4 font-semibold text-gray-700 w-[120px] whitespace-nowrap">성명</td>
                  <td className="px-5 py-3">
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="w-full max-w-[240px] px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:ring-1 focus:ring-elif-lake/40 focus:border-elif-lake"
                    />
                  </td>
                </tr>

                {/* 연락처 */}
                <tr className="border-b border-gray-200">
                  <td className="bg-gray-50 px-5 py-4 font-semibold text-gray-700 whitespace-nowrap">연락처</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1.5">
                      <select
                        value={form.phone1}
                        onChange={(e) => handleChange("phone1", e.target.value)}
                        className="px-2 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:ring-1 focus:ring-elif-lake/40 focus:border-elif-lake bg-white"
                      >
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                      <span className="text-gray-400">-</span>
                      <input
                        type="text"
                        maxLength={4}
                        value={form.phone2}
                        onChange={(e) => handleChange("phone2", e.target.value.replace(/\D/g, ""))}
                        className="w-[80px] px-3 py-2 border border-gray-200 rounded text-[13px] text-center focus:outline-none focus:ring-1 focus:ring-elif-lake/40 focus:border-elif-lake"
                      />
                      <span className="text-gray-400">-</span>
                      <input
                        type="text"
                        maxLength={4}
                        value={form.phone3}
                        onChange={(e) => handleChange("phone3", e.target.value.replace(/\D/g, ""))}
                        className="w-[80px] px-3 py-2 border border-gray-200 rounded text-[13px] text-center focus:outline-none focus:ring-1 focus:ring-elif-lake/40 focus:border-elif-lake"
                      />
                    </div>
                  </td>
                </tr>

                {/* 관심유형 */}
                <tr className="border-b border-gray-200">
                  <td className="bg-gray-50 px-5 py-4 font-semibold text-gray-700 whitespace-nowrap">관심유형</td>
                  <td className="px-5 py-3">
                    <div className="flex flex-wrap items-center gap-4">
                      {["특별공급", "1순위", "2순위"].map((type) => (
                        <label key={type} className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="interestType"
                            value={type}
                            checked={form.interestType === type}
                            onChange={(e) => handleChange("interestType", e.target.value)}
                            className="w-3.5 h-3.5 text-elif-green focus:ring-elif-lake/30 border-gray-300"
                          />
                          <span className="text-[13px] text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* 연령대 */}
                <tr className="border-b border-gray-200">
                  <td className="bg-gray-50 px-5 py-4 font-semibold text-gray-700 whitespace-nowrap">연령대</td>
                  <td className="px-5 py-3">
                    <div className="flex flex-wrap items-center gap-4">
                      {["20대", "30대", "40대", "50대", "60대 이상"].map((age) => (
                        <label key={age} className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="age"
                            value={age}
                            checked={form.age === age}
                            onChange={(e) => handleChange("age", e.target.value)}
                            className="w-3.5 h-3.5 text-elif-green focus:ring-elif-lake/30 border-gray-300"
                          />
                          <span className="text-[13px] text-gray-700">{age}</span>
                        </label>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* 주소 */}
                <tr>
                  <td className="bg-gray-50 px-5 py-4 font-semibold text-gray-700 whitespace-nowrap">주소</td>
                  <td className="px-5 py-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <select
                        value={form.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        className="px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:ring-1 focus:ring-elif-lake/40 focus:border-elif-lake bg-white"
                      >
                        <option value="">도시</option>
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
                        className="w-[100px] px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:ring-1 focus:ring-elif-lake/40 focus:border-elif-lake"
                      />
                      <input
                        type="text"
                        value={form.dong}
                        onChange={(e) => handleChange("dong", e.target.value)}
                        placeholder="읍/면/동"
                        className="w-[100px] px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:ring-1 focus:ring-elif-lake/40 focus:border-elif-lake"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===== 버튼 ===== */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="submit"
              className="px-10 py-3 bg-elif-green text-white text-[14px] font-bold tracking-wider rounded-full hover:bg-elif-green-light transition-colors"
            >
              등록하기
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-10 py-3 border border-gray-300 text-gray-500 text-[14px] font-medium tracking-wider rounded-full hover:bg-gray-50 transition-colors"
            >
              취소하기
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            전화 문의:{" "}
            <a href="tel:1844-0981" className="text-elif-green font-bold text-lg">
              1844-0981
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
