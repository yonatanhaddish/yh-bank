import React from 'react'

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
