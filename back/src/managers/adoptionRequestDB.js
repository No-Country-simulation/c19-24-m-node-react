import AdoptionRequestModel from "../models/AdoptionRequestModel.js";

class AdoptionRequestManager {
    getAdoptionRequests = async () => {
        try {
            const adoptionRequests = await AdoptionRequestModel.find();

            return adoptionRequests;

        } catch (error) {
            console.log(error);
        }
    };

    getAdoptionRequestById = async (id) => {
        try {
            const adoptionRequest = await AdoptionRequestModel.findOne({ _id: id });

            return adoptionRequest;

        } catch (error) {
            console.log(error);
        }
    };

    createAdoptionRequest = async (adoptionRequest) => {
        try {
            const newAdoptionRequest = await AdoptionRequestModel.create(adoptionRequest);

            return newAdoptionRequest;

        } catch (error) {
            console.log(error);
        }
    };

    deleteAdoptionRequest = async (id) => {
        try {
            const deletedAdoptionRequest = await AdoptionRequestModel.deleteOne({ _id: id });

            return deletedAdoptionRequest;

        } catch (error) {
            console.log(error);
        }
    };
}

export { AdoptionRequestManager };
