'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Globe, Monitor, Smartphone, Chrome, Mail,
    Eye, LogOut, LayoutDashboard, MessageSquare,
    Bell, Briefcase, MapPin, RefreshCw, TrendingUp
} from 'lucide-react';

export default function Dashboard() {
    const router = useRouter();
    const [stats, setStats] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [newsletter, setNewsletter] = useState([]);
    const [visits, setVisits] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => { fetchData(); }, []);

    const fetchData = async () => {
        try {
            const res = await fetch('/api/admin/data');
            if (res.status === 401) { router.push('/admin'); return; }
            const data = await res.json();
            setStats(data.stats);
            setContacts(data.contacts);
            setNewsletter(data.newsletter);
            setVisits(data.visits);
            setProjects(data.projects);
        } catch {
            router.push('/admin');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    const handleRefresh = () => { setRefreshing(true); fetchData(); };
    const handleLogout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' });
        router.push('/admin');
    };

    const tabs = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'contacts', label: 'Contacts', icon: MessageSquare, count: contacts.length },
        { id: 'newsletter', label: 'Newsletter', icon: Bell, count: newsletter.length },
        { id: 'projects', label: 'Projects', icon: Briefcase, count: projects.length },
        { id: 'visits', label: 'Visits', icon: Eye, count: visits.length },
    ];

    const statCards = [
        { label: 'Total Visits', value: stats?.totalVisits || 0, icon: Eye },
        { label: 'Unique Pages', value: stats?.uniquePages || 0, icon: Globe },
        { label: 'Contact Forms', value: stats?.totalContacts || 0, icon: MessageSquare },
        { label: 'Subscribers', value: stats?.totalNewsletter || 0, icon: Mail },
        { label: 'Projects', value: stats?.totalProjects || 0, icon: Briefcase },
    ];

    if (loading) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-[#0f0f0f]">
                <div className="flex flex-col items-center gap-3">
                    <RefreshCw className="size-5 text-white/20 animate-spin" />
                    <p className="text-white/30 text-sm">Loading...</p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0f0f0f] text-white/80">
            <div className="max-w-6xl mx-auto px-6 py-8">

                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/8">
                    <div>
                        <h1 className="text-base font-semibold text-white">Null Labz</h1>
                        <p className="text-white/30 text-xs mt-0.5">Admin Dashboard</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleRefresh}
                            className="p-1.5 rounded-md hover:bg-white/5 transition text-white/30 hover:text-white/60"
                        >
                            <RefreshCw className={`size-4 ${refreshing ? 'animate-spin' : ''}`} />
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-white/5 transition text-white/30 hover:text-white/60 text-sm"
                        >
                            <LogOut className="size-3.5" />
                            Logout
                        </button>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                    {statCards.map((stat) => (
                        <div
                            key={stat.label}
                            className="border border-white/8 rounded-lg p-4 hover:border-white/15 transition"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <stat.icon className="size-3.5 text-white/20" />
                            </div>
                            <p className="text-2xl font-semibold text-white">{stat.value}</p>
                            <p className="text-white/30 text-xs mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-1 mb-6 border-b border-white/8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1.5 px-3 py-2 text-sm transition relative ${
                                activeTab === tab.id
                                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white'
                                    : 'text-white/30 hover:text-white/60'
                            }`}
                        >
                            <tab.icon className="size-3.5" />
                            {tab.label}
                            {tab.count > 0 && (
                                <span className="text-xs text-white/20">{tab.count}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Top Pages', icon: TrendingUp, data: stats?.topPages, key: 'page', maxKey: 'count' },
                            { title: 'Top Countries', icon: MapPin, data: stats?.topCountries, key: 'country', maxKey: 'count' },
                            { title: 'Devices', icon: Monitor, data: stats?.devices, key: 'device', maxKey: 'count' },
                            { title: 'Browsers', icon: Chrome, data: stats?.browsers, key: 'browser', maxKey: 'count' },
                        ].map((section) => (
                            <div key={section.title} className="border border-white/8 rounded-lg p-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <section.icon className="size-3.5 text-white/20" />
                                    <h2 className="text-sm text-white/60">{section.title}</h2>
                                </div>
                                <div className="space-y-3">
                                    {section.data?.map((item) => (
                                        <div key={item[section.key]} className="flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-2 min-w-0">
                                                {section.title === 'Devices' && (
                                                    item[section.key] === 'mobile'
                                                        ? <Smartphone className="size-3 text-white/20 shrink-0" />
                                                        : <Monitor className="size-3 text-white/20 shrink-0" />
                                                )}
                                                <span className="text-sm text-white/50 truncate capitalize">
                                                    {item[section.key] || '/'}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 shrink-0">
                                                <div className="w-20 h-px bg-white/8 relative">
                                                    <div
                                                        className="absolute top-0 left-0 h-px bg-white/30"
                                                        style={{ width: `${(item[section.maxKey] / (section.data[0]?.[section.maxKey] || 1)) * 100}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs text-white/30 w-6 text-right">
                                                    {item[section.maxKey]}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Contacts Tab */}
                {activeTab === 'contacts' && (
                    <div className="border border-white/8 rounded-lg overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/8">
                                    {['Name', 'Email', 'Message', 'Date'].map((h) => (
                                        <th key={h} className="text-left px-5 py-3 text-white/25 font-normal text-xs">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((c) => (
                                    <tr key={c.id} className="border-b border-white/5 hover:bg-white/2 transition">
                                        <td className="px-5 py-3.5 text-white/70">{c.name}</td>
                                        <td className="px-5 py-3.5 text-white/40">{c.email}</td>
                                        <td className="px-5 py-3.5 text-white/40 max-w-xs truncate">{c.message}</td>
                                        <td className="px-5 py-3.5 text-white/25 text-xs">{new Date(c.created_at).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                                {contacts.length === 0 && (
                                    <tr><td colSpan={4} className="px-5 py-10 text-center text-white/20 text-sm">No submissions yet</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Newsletter Tab */}
                {activeTab === 'newsletter' && (
                    <div className="border border-white/8 rounded-lg overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/8">
                                    {['Email', 'Subscribed On'].map((h) => (
                                        <th key={h} className="text-left px-5 py-3 text-white/25 font-normal text-xs">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {newsletter.map((n) => (
                                    <tr key={n.id} className="border-b border-white/5 hover:bg-white/2 transition">
                                        <td className="px-5 py-3.5 text-white/50">{n.email}</td>
                                        <td className="px-5 py-3.5 text-white/25 text-xs">{new Date(n.created_at).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                                {newsletter.length === 0 && (
                                    <tr><td colSpan={2} className="px-5 py-10 text-center text-white/20 text-sm">No subscribers yet</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Projects Tab */}
                {activeTab === 'projects' && (
                    <div className="border border-white/8 rounded-lg overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/8">
                                    {['Name', 'Email', 'Stage', 'Type', 'Timeline', 'Budget', 'Date'].map((h) => (
                                        <th key={h} className="text-left px-5 py-3 text-white/25 font-normal text-xs">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((p) => (
                                    <tr key={p.id} className="border-b border-white/5 hover:bg-white/2 transition">
                                        <td className="px-5 py-3.5 text-white/70">{p.name}</td>
                                        <td className="px-5 py-3.5 text-white/40">{p.email}</td>
                                        <td className="px-5 py-3.5">
                                            <span className="text-xs text-white/40 border border-white/10 rounded px-1.5 py-0.5 capitalize">
                                                {p.stage || '—'}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3.5 text-white/40">{p.type || '—'}</td>
                                        <td className="px-5 py-3.5 text-white/40">{p.timeline || '—'}</td>
                                        <td className="px-5 py-3.5 text-white/40">{p.budget || '—'}</td>
                                        <td className="px-5 py-3.5 text-white/25 text-xs">{new Date(p.created_at).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                                {projects.length === 0 && (
                                    <tr><td colSpan={7} className="px-5 py-10 text-center text-white/20 text-sm">No submissions yet</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Visits Tab */}
                {activeTab === 'visits' && (
                    <div className="border border-white/8 rounded-lg overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/8">
                                    {['Page', 'Country', 'City', 'Device', 'Browser', 'Date'].map((h) => (
                                        <th key={h} className="text-left px-5 py-3 text-white/25 font-normal text-xs">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {visits.map((v) => (
                                    <tr key={v.id} className="border-b border-white/5 hover:bg-white/2 transition">
                                        <td className="px-5 py-3.5 text-white/50">{v.page}</td>
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-1.5 text-white/40">
                                                <Globe className="size-3 text-white/20" />
                                                {v.country}
                                            </div>
                                        </td>
                                        <td className="px-5 py-3.5 text-white/40">{v.city}</td>
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-1.5 text-white/40">
                                                {v.device === 'mobile'
                                                    ? <Smartphone className="size-3 text-white/20" />
                                                    : <Monitor className="size-3 text-white/20" />
                                                }
                                                <span className="capitalize">{v.device}</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3.5 text-white/40">{v.browser}</td>
                                        <td className="px-5 py-3.5 text-white/25 text-xs">{new Date(v.created_at).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                                {visits.length === 0 && (
                                    <tr><td colSpan={6} className="px-5 py-10 text-center text-white/20 text-sm">No visits recorded yet</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </main>
    );
}