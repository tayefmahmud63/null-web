'use client';

import { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';

const stages = ['Idea', 'Prototype', 'MVP', 'Production'];

export default function StartProjectForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        stage: '',
        type: '',
        details: '',
        timeline: '',
        budget: '',
    });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/project', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('success');
                setForm({
                    name: '', email: '', stage: '',
                    type: '', details: '', timeline: '', budget: '',
                });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                           text-white placeholder:text-white/60 outline-none focus:border-primary"
            />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                           text-white placeholder:text-white/60 outline-none focus:border-primary"
            />

            <div>
                <label className="block text-sm mb-3 text-white/80">Project Stage</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {stages.map((stage) => (
                        <label
                            key={stage}
                            className="flex items-center gap-2 rounded-lg border border-white/20 
                                       bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition"
                        >
                            <input
                                type="radio"
                                name="stage"
                                value={stage.toLowerCase()}
                                checked={form.stage === stage.toLowerCase()}
                                onChange={handleChange}
                                className="accent-primary"
                            />
                            <span className="text-sm text-white/90">{stage}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm mb-2 text-white/80">Project Type</label>
                <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                               text-white outline-none focus:border-primary"
                >
                    <option value="" disabled className="text-black">Project Type</option>
                    <option className="text-black">IoT</option>
                    <option className="text-black">Embedded System</option>
                    <option className="text-black">Mobile App</option>
                </select>
            </div>

            <textarea
                rows="5"
                name="details"
                placeholder="Project Details"
                value={form.details}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                           text-white placeholder:text-white/60 outline-none focus:border-primary resize-none"
            />

            <input
                type="text"
                name="timeline"
                placeholder="Expected Timeline (e.g. 2 months)"
                value={form.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                           text-white placeholder:text-white/60 outline-none focus:border-primary"
            />

            <input
                type="text"
                name="budget"
                placeholder="Estimated Budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                           text-white placeholder:text-white/60 outline-none focus:border-primary"
            />

            {status === 'success' && (
                <p className="text-green-400 text-sm text-center">
                    ✅ Project submitted! We'll get back to you soon.
                </p>
            )}
            {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                    ❌ Something went wrong. Please try again or email us directly.
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="btn rounded-lg flex items-center justify-center gap-2 px-6 py-3 w-full
                           disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === 'sending' ? 'Submitting...' : 'Submit Project'}
                <ArrowRightIcon className="size-4" />
            </button>
        </form>
    );
}