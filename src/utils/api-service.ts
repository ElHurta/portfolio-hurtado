import { Profile } from "@/interfaces/portfolio.interfaces";
import { api_config } from "../app/config"

export async function getProfile(developerId: string): Promise<Profile> {

    //GetProfile
    const profile = await fetch(`${api_config.api_host}${api_config.api_port}/api/collections/developer/records/${developerId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .catch(err => {
            console.error(err);
        });
    return profile;
}