import { Profile, Skill } from "@/interfaces/portfolio.interfaces";
import { api_config } from "../app/config"

export async function getProfile(developerId: string): Promise<Profile> {

    //GetProfile
    const profile = await fetch(`${api_config.api_host}${api_config.api_port}/api/collections/developer/records/${developerId}?expand=skills,languages`,
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

export async function getSkills(): Promise<Skill[]> {

    //GetSkills
    const skills = await fetch(`${api_config.api_host}${api_config.api_port}/api/collections/skill/records`,
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
    return skills.items;
}

export async function getSkillByID (skillId: string): Promise<Skill> {

    //GetSkill
    const skill = await fetch(`${api_config.api_host}${api_config.api_port}/api/collections/skill/records/${skillId}`,
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
    return skill;
}