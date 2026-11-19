
export default function ManpowerMessage() {
 return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-[#ffff] text-black ">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#801717] border border-black text-[#ffff] px-4 py-1 rounded-full text-xs mb-6">
          🎯 Skilled Industrial Workforce Solutions
        </div>

        <div className="grid lg:grid-cols-1 gap-10  mb-12 md:mb-12">

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-[45px] leading-snug font-bold mb-6">
              Industrial Manpower Solutions at DIAC
              <span className="block text-[#801717]">
                 Building a Skilled Workforce for Industry
              </span>
            </h2>

            <p className="text-gray-700 text-lg leading-8 mb-6">
             DIAC, we understand that skilled manpower is the backbone of every successful industrial operation. Our manpower solutions focus on connecting industries with trained, qualified, and technically skilled professionals who understand modern industrial requirements.
            </p>

            <p className="text-gray-700 text-lg leading-8">
              We focus on industrial automation, electrical engineering, PLC & SCADA, HMI, VFD, robotics, machine operations, maintenance, and related technical fields. Our goal is to help industries find the right workforce to support their operations, improve productivity, and maintain efficient industrial processes.
            </p>

            <p className="text-gray-700 text-lg leading-8">
              With the growing adoption of Industry 4.0, smart manufacturing, and advanced automation technologies, industries require professionals with practical technical knowledge and hands-on experience. DIAC aims to bridge this workforce gap by focusing on industry-oriented skills and technical expertise.
            </p>
          </div>
        </div>

        {/* second part */}

        <div>
          <h2 className="text-[31px] md:text-[45px] leading-relaxed tracking-normal font-bold mb-6">
            Why Skilled Industrial Manpower  {" "}
            <span className=" text-[#801717]">
              is Important
            </span>
          </h2>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            Modern industries depend on skilled professionals to operate machinery, manage automated systems, maintain equipment, and ensure smooth production operations.
          </p>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            As manufacturing and industrial automation continue to evolve, the demand for technically qualified manpower is increasing across sectors such as automotive, electronics, pharmaceuticals, food processing, and general manufacturing.
          </p>
          <p className="text-gray-800 text-xl leading-8 font-bold">
            Key reasons industries need skilled manpower:
          </p>
        </div>
          
<div className="space-y-4 mt-5">

  <div className="flex items-start gap-3">
    <span className="text-[#801717] text-xl font-bold">✓</span>
    <p className="text-gray-700">
      <strong>Technical Expertise:</strong> Professionals with knowledge of PLC, SCADA, electrical systems, robotics, and industrial automation.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-[#801717] text-xl font-bold">✓</span>
    <p className="text-gray-700">
      <strong>Improved Productivity:</strong> Skilled workers help maintain efficient production processes and reduce operational interruptions.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-[#801717] text-xl font-bold">✓</span>
    <p className="text-gray-700">
      <strong>Industrial Safety:</strong> Technically trained professionals understand equipment handling and workplace safety requirements.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-[#801717] text-xl font-bold">✓</span>
    <p className="text-gray-700">
      <strong>Automation Readiness:</strong> Workforce capabilities aligned with modern manufacturing and Industry 4.0 technologies.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-[#801717] text-xl font-bold">✓</span>
    <p className="text-gray-700">
      <strong>Reliable Operations:</strong> Qualified manpower supports equipment maintenance, troubleshooting, and smooth industrial operations.
    </p>
  </div>

</div>

{/* Our Industrial Manpower Expertise */}
<div className="mt-12">

  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
    Our Industrial Manpower Expertise
  </h2>

  <p className="text-gray-700 text-lg leading-8 mb-6">
    DIAC focuses on technical workforce requirements across various industrial domains:
  </p>

  <ul className="space-y-3">
    {[
      "Industrial Automation Professionals",
      "PLC & SCADA Technicians",
      "Electrical Maintenance Engineers",
      "HMI & VFD Specialists",
      "Robotics and Automation Technicians",
      "Industrial Maintenance Professionals",
      "Machine Operators and Technical Support Staff",
    ].map((item, index) => (
      <li key={index} className="flex items-start gap-3 text-gray-700">
        <span className="text-[#801717] text-xl font-bold">✓</span>
        <span className="text-base md:text-lg">{item}</span>
      </li>
    ))}
  </ul>

</div>


<section className="bg-gray-50 py-16 md:py-20">
  <div className="mx-auto max-w-6xl px-5 md:px-8">

    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="rounded-full bg-[#801717]/10 px-4 py-2 text-sm font-semibold text-[#801717]">
        DIAC Manpower Consultancy
      </span>

      <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-4xl">
        Manpower Consultancy – Terms & Conditions
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-2">

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-[#801717]">
          1. Professional Service Charges
        </h3>
        <p className="leading-7 text-gray-600">
          DIAC charges a professional consultancy fee of
          <strong> 8.33% of the candidate's Annual Cost to Company (CTC)</strong>
          as mentioned in the official job offer.
        </p>
        <p className="mt-3 leading-7 text-gray-600">
          <strong>GST:</strong> Applicable GST at the prevailing rate of
          18% will be charged additionally.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-[#801717]">
          2. Payment Terms & Procedure
        </h3>
        <ul className="list-disc space-y-2 pl-5 leading-7 text-gray-600">
          <li>The consultancy invoice will be raised once the selected candidate officially joins the organization.</li>
          <li>Payment must be released within <strong>7 calendar days</strong> from the invoice date, subject to the candidate joining the organization.</li>
          <li>All payments shall be made against the invoice raised in the name of the hiring company.</li>
        </ul>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-[#801717]">
          3. Roles & Responsibilities
        </h3>
        <ul className="list-disc space-y-2 pl-5 leading-7 text-gray-600">
          <li>DIAC acts as a manpower consultancy and recruitment service provider.</li>
          <li>DIAC shall not be responsible for any actions, conduct, performance, or activities of the candidate before or after employment.</li>
          <li>The employer shall be solely responsible for the employee's supervision, workplace conduct, performance management, and employment-related matters.</li>
        </ul>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-[#801717]">
          4. Replacement Guarantee
        </h3>
        <p className="leading-7 text-gray-600">
          DIAC provides a <strong>one-time free replacement guarantee
          within three months (90 days) from the candidate's date of joining</strong>,
          subject to the following conditions:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-600">
          <li>The candidate voluntarily resigns within the guarantee period.</li>
          <li>The candidate is terminated by the employer for a valid and documented performance-related or disciplinary reason.</li>
          <li>The candidate fails to fulfil the agreed job responsibilities.</li>
        </ul>
        <p className="mt-3 leading-7 text-gray-600">
          In such cases, DIAC will make reasonable efforts to provide a
          suitable replacement candidate without any additional professional
          consultancy fee.
        </p>
      </div>

    </div>

    <div className="mt-12 rounded-2xl bg-[#801717] px-6 py-10 text-white md:px-10">
      <h3 className="mb-5 text-2xl font-bold md:text-3xl">
        Let's Build Your Workforce Together
      </h3>

      <p className="leading-8 text-white/90">
        At DIAC, we believe that the right talent drives business growth.
        Our objective is to connect organizations with skilled engineering
        professionals and support their long-term workforce requirements.
      </p>

      <p className="mt-5 font-semibold leading-8">
        To initiate our recruitment services, kindly confirm your acceptance
        of the above terms and conditions. Upon receiving your confirmation,
        we will proceed with sharing suitable candidate profiles for your
        recruitment requirements.
      </p>

      <p className="mt-4 leading-7 text-white/90">
        For further information or assistance, please feel free to contact
        our team.
      </p>

      <div className="mt-7 border-t border-white/25 pt-5 font-semibold">

<div className="mt-7 flex flex-col gap-5 border-t border-white/25 pt-6 md:flex-row md:items-center md:justify-between">

  <p className="font-semibold leading-7">
    DIAC – Training, Career Development & Manpower Consultancy Since 2009.
  </p>

  <a
    href="/contact"
    className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-[#801717] transition duration-300 hover:bg-gray-100"
  >
    Contact Us
  </a>

</div> 
      </div>
    </div>

  </div>
</section>

      </div>
    </section>
  );
}
