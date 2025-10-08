"use client"

import { useMemo, useState } from "react"
import StepOneOnboarding from "./step-one"
import StepTwoOnboarding from "./step-two"
import StepThreeOnboarding from "./step-three"
import StepFourOnboarding from "./step-four"
import StepFiveOnboarding from "./step-five"

const defaultAvailability = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => ({
  day: d,
  enabled: false,
  start: "",
  end: "",
}))

const initialData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  businessName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  timeZone: "",
  password: "",
  billingFrequency: "monthly",
  cardName: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  ccv: "",
  useShippingAsBilling: false,
  businessType: "",
  employees: "",
  taxId: "",
  logoFile: null,
  logoPreview: null,
  avatarFile: null,
  avatarPreview: null,
  availability: defaultAvailability,
}

export default function OnboardingWizard() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState(initialData)

  const totalSteps = 5
  const next = () => setStep((s) => Math.min(totalSteps, s + 1))
  const prev = () => setStep((s) => Math.max(1, s - 1))

  const update = (key, value) => {
    setData((d) => ({ ...d, [key]: value }))
  }

  const setAvailability = (idx, patch) => {
    setData((d) => {
      const copy = [...d.availability]
      copy[idx] = { ...copy[idx], ...patch }
      return { ...d, availability: copy }
    })
  }

  const stepLabel = useMemo(() => `Step ${step} of ${totalSteps}`, [step])

  return (
    <>
      {step === 1 && <StepOneOnboarding stepLabel={stepLabel} values={data} onChange={update} onNext={next} />}
      {step === 2 && (
        <StepTwoOnboarding
          stepLabel={stepLabel}
          password={data.password}
          onChange={(val) => update("password", val)}
          onPrev={prev}
          onNext={next}
        />
      )}
      {step === 3 && (
        <StepThreeOnboarding stepLabel={stepLabel} values={data} onChange={update} onPrev={prev} onNext={next} />
      )}
      {step === 4 && (
        <StepFourOnboarding stepLabel={stepLabel} values={data} onChange={update} onPrev={prev} onNext={next} />
      )}
      {step === 5 && (
        <StepFiveOnboarding
          stepLabel={stepLabel}
          values={data}
          setAvailability={setAvailability}
          onPrev={prev}
          onFinish={() => alert("Onboarding complete!")}
        />
      )}
    </>
  )
}
