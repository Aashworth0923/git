import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    return PARTNERS;  
};

export const selectFeaturedPartner = () => {
    return PARTNERS.find((promotion) => promotion.featured);
};