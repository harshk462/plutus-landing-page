"use client";


import { Input } from "@/components/ui/input";
import { PlutusButton } from "@/components/ui/PlutusButton";
import { toast } from "@/components/ui/use-toast";
import httpClient from "@/lib/api";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await httpClient.post<{ success: boolean, message: string }>({
                baseUrl: "https://api.plutus.gg/v1.1",
                path: "newsletter",
                data: { email: email.trim() },
                isAuth: false
            });

            if (response.success) {
                toast({
                    title: "You have been subscribed to our newsletter",
                    description: "You will receive updates about our latest products and services",
                    variant: "default"
                });
                setEmail("");
            } else {
                toast({
                    title: "Error",
                    description: response.message,
                    variant: "destructive"
                });
            }
        } catch (error) {
            // console.error(error);
            toast({
                title: "Error",
                description: "Something went wrong",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <div className="text-sm">
                Subscribe to our newsletter
            </div>
            <form onSubmit={handleSubscribe} className="mt-3 flex gap-3">
                <Input
                    placeholder="hello@gmail.com"
                    className="w-full rounded-[12px]"
                    type="email"
                    inputClassName="bg-white/5 text-sm text-[#FCFCFC] placeholder:text-[#FCFCFC]/20 placeholder:font-light border-none rounded-[12px] h-12"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <PlutusButton
                    className="text-[#7E2499] text-sm font-medium bg-white rounded-[12px] px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={isLoading}
                >
                    Subscribe
                </PlutusButton>
            </form>
        </div>
    )
}
